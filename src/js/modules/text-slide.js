'use strict';

var $ = require('elements');
require('moofx');

/**
 *
 */
var Slide = function(el){
	this.el = $(el);
};

/**
 * @param {Bool} instant
 */
Slide.prototype.hide = function(instant, direction){
	if (instant){
		this.el.style({display: 'none'});
		return;
	}

	var end = {opacity: 0, left: -25};

	if (direction == '-'){
		end.left = 25;
	}

	var self = this;
	this.el.animate(end, {duration: 750, callback: function(){
		self.el.style({display: 'none'});
	}});
};

/**
 *
 */
Slide.prototype.show = function(instant, direction){
	var start = { display: 'block', opacity: 0, left: 25 },
		end = { opacity: 1, left: 0 };

	if (direction == '-'){
		start.left = -25;
	}

	this.el.style(start).animate(end, {duration: 750});
};

module.exports = Slide;
