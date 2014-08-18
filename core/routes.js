'use strict';

var fs = require('fs'),
	request = require('request'),
	merge = require('mout/object/merge'),
	app = require('./app'),
	config = require('./config'),
	clients;

try {
	clients = JSON.parse(fs.readFileSync(process.cwd() + '/data/clients.json'));
} catch(e){
	console.log('Failed to read/parse clients.json');
	process.exit(1);
}

var routes = [
	{
		path: '/',
		endpoint: config.apiUrl + '/api/v1/home',
		mockData: process.cwd() + '/data/home.json',
		template: 'index',
		extras: 'clientList'
	},
	{
		path: '/cases/ing',
		endpoint: config.apiUrl + '/api/v1/cases/ing',
		mockData: process.cwd() + '/data/cases/ing.json',
		template: 'cases/ing'
	},
	{
		path: '/cases/kpmg',
		endpoint: config.apiUrl + '/api/v1/cases/kpmg',
		mockData: process.cwd() + '/data/cases/kpmg.json',
		template: 'cases/kpmg'
	},
	{
		path: '/cases/litedark',
		endpoint: config.apiUrl + '/api/v1/cases/litedark',
		mockData: process.cwd() + '/data/cases/litedark.json',
		template: 'cases/litedark'
	},
	{
		path: '/cases/slimleren',
		endpoint: config.apiUrl + '/api/v1/cases/slimleren',
		mockData: process.cwd() + '/data/cases/slimleren.json',
		template: 'cases/slimleren'
	}
];

var extras = {
	clientList: function(data, cb){
		cb(merge(data, {clients: clients}));
	}
};

routes.forEach(function(route){
	if (!route.path || !route.template) return;

	app.get(route.path, function(req, res){
		if (req.cookies.mock && route.mockData){
			fs.readFile(route.mockData, {encoding: 'utf8'}, function(err, body){
				res.render(route.template, {locals: JSON.parse(body)});
			});
		} else if (route.endpoint){
			request({
				url: route.endpoint,
				json: {},
				headers: {'Accept-Language': 'en'}
			}, function(err, response, body){
				if (route.extras && extras[route.extras]){
					extras[route.extras](body, function(body){
						res.render(route.template, {locals: body});
					});
				} else {
					res.render(route.template, {locals: body});
				}
			});
		} else {
			res.render(route.template);
		}
	});
});
