'use strict';

var $ = require('elements');
require('elements/events');
require('moofx');

/**
 * New slides instance
 * @param {Element} el
 * @param {Object} options
 */
var Slides = function(el, options){
	if (!(this instanceof Slides)){
		return new Slides(el, options);
	}

	el = $(el);
	options = options || {};
	this.tabs = el.search('.slides-tabs a');
	this.contents = el.search('.slides-contents > article');

	if (this.tabs.length != this.contents.length){
		throw new Error('Amount of tabs is not equal is not equal to the amount of content panels');
	}

	this.initial = parseInt(options.initial, 10) || 0;

	for (var i = 0; i < this.tabs.length; i++){
		$(this.tabs[i]).attribute('data-index', i);

		if (i === this.initial){
			this.tabs[i].classList.add('active');
		} else {
			this.contents[i].style.display = 'none';
		}
	}

	this.prevButton = el.search('.slides-prev');
	this.nextButton = el.search('.slides-next');

	this.current = this.initial;
	this.attachEvents();
};

/**
 * Attach required events
 */
Slides.prototype.attachEvents = function(){
	this.tabs.on('click', function(e){
		e.preventDefault();
		this.to($(e.target).attribute('data-index'));
	}.bind(this));

	if (this.prevButton){
		this.prevButton.on('click', function(e){
			e.preventDefault();
			this.previous();
		}.bind(this));
	}

	if (this.nextButton){
		this.nextButton.on('click', function(e){
			e.preventDefault();
			this.next();
		}.bind(this));
	}
};

/**
 * Go to the previous slide
 * @return {Boolean}
 */
Slides.prototype.previous = function(){
	return this.to(this.current - 1);
};

/**
 * Go to the next slide
 * @return {Boolean}
 */
Slides.prototype.next = function(){
	return this.to(this.current + 1);
};

/**
 * Transition to a slide by index
 * @param {Number} index
 * @return {Boolean}
 */
Slides.prototype.to = function(index){
	index = parseInt(index, 10);
	if (!this.tabs[index]) return false;

	this.tabs[this.current].classList.remove('active');
	this.tabs[index].classList.add('active');

	var current = $(this.contents[this.current]),
		next = $(this.contents[index]),
		currEnd = {left: '-50%', opacity: 0},
		nextStart = {display: 'block', left: 0, opacity: 0},
		nextEnd = {opacity: 1};

	if (this.current > index){
		currEnd.left = '50%';
	}

	next.style(nextStart);

	current.animate(currEnd);
	next.animate(nextEnd);

	if (this.prevButton) {
		this.prevButton[index === 0 ? 'addClass' : 'removeClass']('disabled');
	}
	if (this.nextButton) {
		this.nextButton[index === (this.tabs.length - 1) ? 'addClass' : 'removeClass']('disabled');
	}

	this.current = index;
	return true;
};

module.exports = Slides;
