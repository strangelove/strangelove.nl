'use strict';

var express = require('express'),
	cons = require('consolidate'),
	swig = require('swig'),
	app = require('./app');

app
	.engine('html', cons.swig)
	.set('view engine', 'html')
	.set('views', process.cwd() + '/views')
	.use(express.static(process.cwd() + '/public'))
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

app.set('view cache', false);
swig.setDefaults({ cache: false });

if (app.settings.env == 'development'){
	swig.setDefaults({cache: false});
}
