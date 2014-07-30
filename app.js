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
	.use(express.static(__dirname + '/public'));

if (app.settings.env == 'development'){
	swig.setDefaults({cache: false});
}

app.get('/', function(req, res){
	request({
		url: 'http://localhost:8000/api/v1/home',
		json: {} 
	}, function(err, resp, body){
		res.render('index', {locals: body});
	});
});

app.get('/cases/ing', function(req, res){
	res.render('cases/ing');
});

app.get('/cases/litedark', function(req, res){
	res.render('cases/litedark');
});

var port = parseInt(argv.p, 10) || 3000;
app.listen(port, function(){
	console.log('Listening on port %d', port);
});
