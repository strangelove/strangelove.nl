'use strict';

var $ = require('elements'),
	el = $('.about .slides');

require('./containerheight')(el.search('.slides-contents')[0], {
	selector: 'article'
});

var slides = new (require('slides-js'))(document.querySelector('.about .slides'), {
	slideSelector: '.slides-contents article',
	navSelector: '.slides-tabs a',
	transition: require('./text-slide'),
	loop: false
});

el.search('.slides-prev').on('click', function(e){
	e.preventDefault();
	slides.previous();
});

el.search('.slides-next').on('click', function(e){
	e.preventDefault();
	slides.next();
});
