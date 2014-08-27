'use strict';

var $ = require('elements'),
	btn = $('.back-to-top');

var windowHeight = window.innerHeight;

$(window).on('scroll', function(){
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	btn[scrollTop > windowHeight ? 'addClass' : 'removeClass']('shown');
});
