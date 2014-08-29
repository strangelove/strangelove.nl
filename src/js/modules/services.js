'use strict';

var $ = require('elements'),
	isTouch = ('ontouchstart' in window || 'onmsgesturechange' in window);

var removeLoopClass = function(){
	$(this).removeClass('loop');
	$(this).off('animationend', removeLoopClass);
	$(this).off('oAnimationEnd', removeLoopClass);
	$(this).off('webkitAnimationEnd', removeLoopClass);
};

var causeLoop = function(el){
	if (el.hasClass('loop')) return;
	el.addClass('loop');
	el.on('animationend', removeLoopClass);
	el.on('oAnimationEnd', removeLoopClass);
	el.on('webkitAnimationEnd', removeLoopClass);
};

if (!isTouch){

	$('.services').delegate('mouseover', '.icon', function(e, el){
		causeLoop(el);
	});
}
