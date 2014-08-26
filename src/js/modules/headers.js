'use strict';

var isSafari = (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0),
	isTouch = ('ontouchstart' in window || 'onmsgesturechange' in window);

if (!isSafari && !isTouch){
	var $ = require('elements'),
		debounce = require('mout/function/debounce');

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

			if (i > 0){
				clone.find('.nav-primary li:nth-child(' + i + ')').addClass('active');
			}

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

		var recalculate = function(){
			bodyRect = document.body.getBoundingClientRect();
			sectionTops = [];
			for (i = 0; i < sections.length; i++){
				sectionRect = sections[i].getBoundingClientRect();
				sectionTops.push(sectionRect.top - bodyRect.top);
			}
		};

		$(window).on('resize', debounce(recalculate, 300));
	});
}
