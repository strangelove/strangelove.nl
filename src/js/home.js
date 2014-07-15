'use strict';

var scrollFx = new (require('./modules/scrollfx'))(),
	$ = require('elements');

var causeLoop = function(el){
	el.addClass('loop');
	setTimeout(function(){ el.removeClass('loop'); }, 1720);
};

$('.services').delegate('mouseover', '.service', function(e, el){
	if (!el.hasClass('loop')) causeLoop(el);
});

scrollFx.add({
	el: $('.mood-bg'),
	posStart: 0,
	posEnd: window.innerHeight,
	styles: {
		transform: ['translateY(0%)', 'translateY(25%)']
	}
});
scrollFx.add({
	el: $('.mission'),
	posStart: 0,
	posEnd: window.innerHeight,
	styles: {
		top: ['50%', '110%'],
		opacity: [1, 0.3]
	}
});
scrollFx.add({
	el: $('.continue'),
	posStart: 0,
	posEnd: 300,
	styles: {
		transform: ['translateY(0px)', 'translateY(300px)']
	}
});
scrollFx.add({ el: $('.clarify'), posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.create'),  posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.code'),    posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.connect'), posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.control'), posStart: 500, callback: causeLoop });

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
