'use strict';

var $ = require('elements'),
	easeInOutQuad = require('kubrick-js/easing/easeInOutQuad'),
	getScrollTop = require('kubrick-js/lib/scrolltop'),
	btn = $('.back-to-top'),
	windowHeight = window.innerHeight - 1;

require('moofx');

$(window).on('scroll', function(){
	btn[getScrollTop() > windowHeight ? 'addClass' : 'removeClass']('shown');
});

btn.on('click', function(e){
	e.preventDefault();

	var start = getScrollTop(),
		change = -start,
		duration = 150,
		currentTime = 0,
		increment = 10;

	var animateScroll = function(){
		currentTime += increment;
		window.scrollTo(0, easeInOutQuad(currentTime, start, change, duration));
		if(currentTime < duration){
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
});
