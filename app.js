'use strict';

var fs = require('fs'),
	express = require('express'),
	swig = require('swig'),
	cons = require('consolidate'),
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
	fs.readFile(__dirname + '/data/home.json', {encoding: 'utf8'}, function(err, body){
		res.render('index', {locals: JSON.parse(body)});
	});
});

app.get('/cases/litedark', function(req, res){
	res.render('cases/litedark');
});

var port = parseInt(argv.p, 10) || 3000;
app.listen(port, function(){
	console.log('Listening on port %d', port);
});
