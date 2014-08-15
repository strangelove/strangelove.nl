'use strict';

var $ = require('elements'),
	Slides = require('slides-js'),
	Slide = require('slides-js/transitions/fade'),
	el = $('.office .slides');

require('./containerheight')(el.search('.slides-contents')[0], {
	selector: 'article'
});

var slides = new Slides(el, {
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

var bgs = $('.office-bg'), i, len = bgs.length, bgSlides = [];

for (i = 0; i < len; i++){
	bgSlides.push(new Slide(bgs[i]));
}

slides.on('change', function(to, from){
	if (from !== null){
		bgSlides[from].hide();
	}
	bgSlides[to].show();
});
