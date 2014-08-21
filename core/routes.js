'use strict';

var fs = require('fs'),
	request = require('request'),
	map = require('mout/array/map'),
	merge = require('mout/object/merge'),
	trim = require('mout/string/trim'),
	app = require('./app'),
	config = require('./config'),
	workable = require('../lib/workable'),
	clients = {}, jobs = {}, navigation = [];

try {
	clients = JSON.parse(fs.readFileSync(process.cwd() + '/data/clients.json'));
} catch(e){
	console.log('Failed to read/parse clients.json');
	process.exit(1);
}

workable.fetchJobs().then(function(list){
	jobs = list;
});

request({
	url: config.apiUrl + '/api/v1/navigation',
	json: true,
	headers: {'Accept-Language': 'en'}
}, function(err, response, body){
	navigation = body;
});

var routes = [
	{
		path: '/',
		endpoint: config.apiUrl + '/api/v1/home',
		mockData: process.cwd() + '/data/home.json',
		template: 'index',
		extras: 'home'
	},
	{
		path: '/services',
		endpoint: config.apiUrl + '/api/v1/page/our-vision',
		template: 'services',
		extras: 'services'
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
	home: function(data, cb){
		if (data.home_jobs) delete data.home_jobs;

		if (data.home_services){
			var services = [], i, service,
				trimcb = function(val){ return trim(val); };
			for (i = 1; i < 6; i++){
				service = data.home_services[i];
				services.push({
					name: service.name,
					keywords: map(service.intro.split(','), trimcb)
				});
			}
			data.services = services;
			delete data.home_services;
		}

		cb(merge(data, {
			clients: clients,
			home_jobs: jobs,
			navigation: navigation
		}));
	},

	services: function(data, cb){
		if (data['our-vision']){
			data.our_vision = data['our-vision'];
			delete data['our-vision'];
		}
		cb(merge(data, {
			navigation: navigation
		}));
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
