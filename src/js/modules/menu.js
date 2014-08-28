'use strict';

var $ = require('elements'),
	zen = require('elements/zen'),
	nav = $('.nav-primary'),
	$body = $(document.body);

require('moofx');

var bodyOverlay = zen('div.body-overlay').insert(document.body);

var navClone = $(nav[0].cloneNode(true))
	.removeClass('nav-primary')
	.addClass('nav-clone')
	.insert(document.body);

var noop = function(e){ e.preventDefault(); };

zen('h2').text('Menu').top(navClone);

var showNav = function(){
	bodyOverlay.style({display: 'block', opacity: 0}).animate({
		opacity: 1
	});
	navClone.addClass('shown');
	$body[0].style.overflow = 'hidden';
	$body.on('touchmove', noop);
};

var hideNav = function(){
	bodyOverlay.animate({opacity: 0}, {
		duration: 200,
		callback: function(){
			bodyOverlay.style({display: 'none'});
		}
	});
	navClone.removeClass('shown');
	$body[0].style.overflow = '';
	$body.off('touchmove', noop);
};

$('.show-menu').on('click', function(e){
	e.preventDefault();
	showNav();
});

navClone.delegate('click', 'a', hideNav);

bodyOverlay.on('click', hideNav);
