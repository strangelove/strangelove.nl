'use strict';

var zen = require('elements/zen');
require('moofx');

/**
 * Create a new popover
 * @param {Object} options
 */
var Popover = function(options){
	this.wrapper = zen('div.popover').insert(document.body);
	this.content = zen('div.popover-content').insert(this.wrapper);

	options = options || {};

	if (options.content){
		options.content.insert(this.content);
	}

	if (!options.offset) options.offset = { x: 0, y: 0 };
	options.offset = {
		x: options.offset.x || 0,
		y: options.offset.y || 0
	};

	var bodyRect = document.body.getBoundingClientRect(),
		rect = this.wrapper[0].getBoundingClientRect();
	this.width = rect.right - rect.left;
	this.height = rect.bottom - rect.top;

	if (options.anchor){
		this.anchor = options.anchor;
		this.anchorRect = this.anchor[0].getBoundingClientRect();
		this.wrapper[0].style.top = ((this.anchorRect.top - bodyRect.top) + options.offset.y) + 'px';
		if (this.width + options.offset.x < bodyRect.right - this.anchorRect.right){
			this.wrapper.addClass('left');
			this.wrapper[0].style.left = ((this.anchorRect.right - bodyRect.left) + options.offset.x) + 'px';
		} else {
			this.wrapper.addClass('right');
			this.wrapper[0].style.left = (this.anchorRect.left - this.width - options.offset.x) + 'px';
		}
	}

	this.wrapper[0].style.display = 'none';
};

/**
 * Show the content
 */
Popover.prototype.show = function(){
	this.shown = true;
	this.wrapper.style({opacity: 0, display: 'block'}).animate({
		opacity: 1
	}, {duration: 250});
};

/**
 * Hide the popover
 */
Popover.prototype.hide = function(){
	this.shown = false;
	var wrapper = this.wrapper;
	this.wrapper.animate({opacity: 0}, {
		duration: 250,
		callback: function(){
			wrapper.style({display: 'none'});
		}
	});
};

/**
 * Toggle popover visibility
 */
Popover.prototype.toggle = function(){
	this[this.shown ? 'hide' : 'show']();
};

module.exports = Popover;
