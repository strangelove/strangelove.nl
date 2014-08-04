'use strict';

var $ = require('elements'),
	Popover = require('./popover'),
	teamList = $('.team-list'),
	popovers = [], i = 0;

var franklinImg = teamList.search('.franklin img'),
	src, num = Math.round(Math.random());

if (franklinImg){
	src = franklinImg.attribute('src');
	if (num === 0){
		franklinImg.attribute('src', src.replace('1', '2'));
	}
}

teamList.search('> li').forEach(function(el){
	el = $(el);
	el.attribute('data-index', i++);
	var img = el.search('img'),
		popover = new Popover({
			anchor: el.search('img'),
			content: el.search('.popover-content'),
			offset: { x: 80, y: -10 }
		});

	img.on('mouseover', function(){
		popover.show();
	});
	img.on('mouseleave', function(){
		popover.hide();
	});
});

teamList.delegate('click', 'li', function(e, el){
	var index = parseInt(el.attribute('data-index'), 10), i;
	for (i = 0; i < popovers.length; i++){
		if (i == index){
			popovers[index].toggle();
		} else {
			popovers[i].hide();
		}
	}
});
