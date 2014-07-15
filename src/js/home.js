'use strict';

var $ = require('elements');

var causeLoop = function(el){
	el.addClass('loop');
	setTimeout(function(){ el.removeClass('loop'); }, 1720);
};

$('.services').delegate('mouseover', '.service', function(e, el){
	if (!el.hasClass('loop')) causeLoop(el);
});

var scrollTop = function(){
	return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

var header = $('.header-main'),
	sections = $('.page'),
	bodyRect = document.body.getBoundingClientRect(),
	headers = [], sectionTops = [], i, clone, sectionRect, y;

for (i = 0; i < sections.length; i++){
	clone = $(header[0].cloneNode(true));
	headers.push(clone);
	clone.insert(sections[i]);

	sectionRect = sections[i].getBoundingClientRect();
	sectionTops.push(sectionRect.top - bodyRect.top);
}

header.style({display: 'none'});

$(window).on('scroll', function(){
	y = scrollTop();
	for (i = 0; i < sections.length; i++){
		headers[i].style({transform: 'translateY(' + (y - sectionTops[i]) + 'px)'});
	}
});
