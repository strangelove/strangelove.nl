'use strict';

var $ = require('elements'),
	isTouch = ('ontouchstart' in window || 'onmsgesturechange' in window);

if (!isTouch){
	var causeLoop = function(el){
		el.addClass('loop');
		setTimeout(function(){ el.removeClass('loop'); }, 1720);
	};

	$('.services').delegate('mouseover', '.icon', function(e, el){
		if (!el.hasClass('loop')) causeLoop(el);
	});
}
