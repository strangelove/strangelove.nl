'use strict';

var debounce = require('mout/function/debounce'),
	zen = require('elements/zen');
require('moofx');

/**
 * Create a new popover
 * @param {Object} options
 */
var Popover = function(options){
	this.wrapper = zen('div.popover').insert(document.body);
	this.hoverZone = zen('div.popover-hover').insert(this.wrapper);
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

	this.hoverZone[0].style.width = options.offset.x + 'px';

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
	this.hoverAnchor = false;
	this.hoverPopover = false;

	var self = this;

	if (this.anchor){
		this.anchor.on('mouseenter', function(){
			self.hoverAnchor = true;
		});
		this.anchor.on('mouseleave', debounce(function(){
			self.hoverAnchor = false;
			if (!self.hoverPopover){
				self.hide();
			}
		}, 1));
	}

	this.wrapper.on('mouseenter', function(){
		self.hoverPopover = true;
	});
	this.wrapper.on('mouseleave', debounce(function(){
		self.hoverPopover = false;
		if (!self.hoverAnchor){
			self.hide();
		}
	}, 1));
};

Popover.prototype.show = function(){
	if (this.shown) return;
	this.shown = true;
	this.wrapper.style({opacity: 0, display: 'block'}).animate({
		opacity: 1
	}, {duration: 250});
};

Popover.prototype.hide = function(){
	if (!this.shown || this.hovering) return;
	this.shown = false;
	var wrapper = this.wrapper;
	this.wrapper.animate({opacity: 0}, {
		duration: 250,
		callback: function(){
			wrapper.style({display: 'none'});
		}
	});
};

Popover.prototype.toggle = function(){
	this[this.shown ? 'hide' : 'show']();
};

module.exports = Popover;
