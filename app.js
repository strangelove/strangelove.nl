'use strict';

var fs = require('fs'),
	express = require('express'),
	swig = require('swig'),
	cons = require('consolidate'),
	request = require('request'),
	argv = require('optimist').argv;

var app = express()
	.engine('html', cons.swig)
	.set('view engine', 'html')
	.set('views', __dirname + '/views')
	.use(express.static(__dirname + '/public'))
	.use(express.cookieParser())
	.use(function(req, res, next){
		if (req.query.mock){
			if (req.query.mock == '1'){
				res.cookie('mock', '1');
				req.cookies.mock = '1';
			} else {
				res.clearCookie('mock');
				delete req.cookies.mock;
			}
		}
		next();
	});

if (app.settings.env == 'development'){
	swig.setDefaults({cache: false});
}

var routes = [
	{
		path: '/',
		endpoint: 'http://localhost:8000/api/v1/home',
		mockData: __dirname + '/data/home.json',
		template: 'index'
	},
	{
		path: '/cases/ing',
		template: 'cases/ing'
	},
	{
		path: '/cases/kpmg',
		mockData: __dirname + '/data/cases/kpmg.json',
		template: 'cases/kpmg'
	},
	{
		path: '/cases/litedark',
		template: 'cases/litedark'
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

var port = parseInt(argv.p, 10) || 3000;
app.listen(port, function(){
	console.log('Listening on port %d', port);
});
