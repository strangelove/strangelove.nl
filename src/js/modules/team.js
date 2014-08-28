'use strict';

var $ = require('elements'),
	Popover = require('./popover'),
	isTouch = ('ontouchstart' in window || 'onmsgesturechange' in window),
	teamList = $('.team-list'),
	popovers = [], i = 0;

teamList.search('> li').forEach(function(el){
	el = $(el);
	el.attribute('data-index', i++);
	var img = el.search('.img');
	popovers.push(new Popover({
		anchor: img,
		content: el.search('.popover-content'),
		offset: { x: 20, y: -13 }
	}));
});

var showPopover = function(index){
	index = parseInt(index);
	for (var i = 0; i < popovers.length; i++){
		if (i == index){
			popovers[index].show();
		} else {
			popovers[i].hide();
		}
	}
};

var togglePopover = function(index){
	index = parseInt(index);
	if (popovers[index]){
		popovers[index].toggle();
	}
};

if (isTouch){
	teamList.delegate('click', '.img', function(e, el){
		togglePopover(el.parent('li').data('index'));
	});
} else {
	teamList.delegate('mouseover', '.img', function(e, el){
		showPopover(el.parent('li').data('index'));
	});
}
