'use strict';

var express = require('express'),
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
	res.render('index');
});

app.get('/cases/litedark', function(req, res){
	res.render('cases/litedark');
});

var port = parseInt(argv.p, 10) || 3000;
app.listen(port, function(){
	console.log('Listening on port %d', port);
});
