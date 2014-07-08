'use strict';

var $ = require('elements');
require('moofx');

var CaseSlides = function(el, options){
	el = $(el);

	options = options || {};
	this.tabs = el.search('.slides-tabs a');
	this.screenshots = el.search('.screenshots li');
	this.contents = el.search('.slides-contents > article');

	if (this.tabs.length != this.contents.length){
		throw new Error('Amount of tabs is not equal is not equal to the amount of content panels');
	}

	for (var i = 0; i < this.tabs.length; i++){
		$(this.tabs[i]).attribute('data-index', i);
	}

	this.current = 0;

	var self = this;
	el.search('.slides-tabs').delegate('click', 'a', function(e, el){
		e.preventDefault();
		self.to(el.attribute('data-index'));
	});
};

CaseSlides.prototype.to = function(index){
	index = parseInt(index, 10);
	if (!this.tabs[index]) return false;

	var current = $(this.screenshots[this.current]),
		next = $(this.screenshots[index]),
		currEnd = {left: '-100%'},
		nextStart = {left: '100%'},
		nextEnd = {left: 0};

	console.log(current, next);

	if (this.current > index){
		nextStart.left = '-100%';
		currEnd.left = '100%';
	}

	next.style(nextStart);

	current.animate(currEnd);
	next.animate(nextEnd);

	this.current = index;
	return true;
};

module.exports = CaseSlides;
