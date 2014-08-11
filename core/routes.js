'use strict';

var fs = require('fs'),
	request = require('request'),
	app = require('./app'),
	config = require('./config');

var routes = [
	{
		path: '/',
		endpoint: config.apiUrl + '/api/v1/home',
		mockData: process.cwd() + '/data/home.json',
		template: 'index'
	},
	{
		path: '/cases/ing',
		template: 'cases/ing'
	},
	{
		path: '/cases/kpmg',
		mockData: process.cwd() + '/data/cases/kpmg.json',
		template: 'cases/kpmg'
	},
	{
		path: '/cases/litedark',
		mockData: process.cwd() + '/data/cases/litedark.json',
		template: 'cases/litedark'
	},
	{
		path: '/cases/slimleren',
		mockData: process.cwd() + '/data/cases/slimleren.json',
		template: 'cases/slimleren'
	}
];

routes.forEach(function(route){
	if (!route.path || !route.template) return;

	app.get(route.path, function(req, res){
		if (req.cookies.mock && route.mockData){
			fs.readFile(route.mockData, {encoding: 'utf8'}, function(err, body){
				res.render(route.template, {locals: JSON.parse(body)});
			});
		} else if (route.endpoint){
			request({url: route.endpoint, json: {}}, function(err, response, body){
				res.render(route.template, {locals: body});
			});
		} else {
			res.render(route.template);
		}
	});
});
