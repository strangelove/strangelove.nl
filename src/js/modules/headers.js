var $ = require('elements');

var scrollTop = function(){
	return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

var header = $('.header-main'),
	sections = $('.page'),
	bodyRect, headers = [], sectionTops = [], i, clone, sectionRect, y;

$(window).on('load', function(){
	bodyRect = document.body.getBoundingClientRect();
	for (i = 0; i < sections.length; i++){
		clone = $(header[0].cloneNode(true));
		headers.push(clone);
		clone.insert(sections[i]);

		sectionRect = sections[i].getBoundingClientRect();
		sectionTops.push(sectionRect.top - bodyRect.top);
	}

	header.style({display: 'none'});

	setInterval(function(){
		window.requestAnimationFrame(function(){
			y = scrollTop();
			for (i = 0; i < sections.length; i++){
				headers[i].style({transform: 'translate3d(0px, ' + Math.round(y - sectionTops[i]) + 'px, 0)'});
			}
		});
	}, 10);
});
