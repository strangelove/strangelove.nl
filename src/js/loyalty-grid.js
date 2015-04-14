'use strict';

var easeInOutQuad = require('kubrick-js/easing/easeInOutQuad'),
	prefix = require('kubrick-js/lib/vendorprefix')();

require('./modules/menu');
require('./modules/back-to-top');

var Kubrick = require('kubrick-js');

var scrollAnimation = [
	{
		duration: '100%',
		actors: [
			{
				element: '.mood',
				translateY: -1000
			},
			{
				element: '.case-summary',
				translateY: '-40%',
				opacity: -1
			}
		]
	},
	{
		duration: '150%',
		easing: 'lineair',
		actors: [
			{
				element: '.lg-wrapper',
				translateY: '-300%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.footer-main',
				translateY: '-100%'
			}
		]
	}
];

var scrollLargeAnimation = [
	{
		duration: '100%',
		actors: [
			{
				element: '.mood',
				translateY: -1000
			},
			{
				element: '.case-summary',
				translateY: '-40%',
				opacity: -1
			}
		]
	},
	{
		duration: '100%',
		easing: 'lineair',
		actors: [
			{
				element: '.lg-wrapper',
				translateY: '-190%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.footer-main',
				translateY: '-100%'
			}
		]
	}
];

if (window.innerWidth > 1024 && window.innerWidth <= 1280 ) {

	new Kubrick(scrollAnimation);
}

if (window.innerWidth > 1280) {

	new Kubrick(scrollLargeAnimation);
}