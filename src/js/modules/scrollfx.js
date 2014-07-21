'use strict';

var isFunction = require('mout/lang/isFunction'),
	isNumber = require('mout/lang/isNumber');

var scrollTop = function(){
	return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

var ScrollFx = function(){
	this.animations = [];
	this.bound = {
		updateFx: this.updateFx.bind(this)
	};

	setInterval(this.bound.updateFx, 10);
};

ScrollFx.prototype.add = function(animation){
	this.animations.push(animation);
};

ScrollFx.prototype.updateFx = function(){
	var self = this;
	window.requestAnimationFrame(function(){
		self.scrollTop = scrollTop();
		self.paint();
	});
};

ScrollFx.prototype.paint = function(){
	var i, len = this.animations.length,
		a, prop, progress, s, e, styles, sVals, eVals, j, newStr, sj, ej;

	for (i = 0; i < len; i++){
		a = this.animations[i];

		if (!a.el) continue;

		// if we're not in range of this element's enimation
		// just apply styles from beginning or end
		if (this.scrollTop < a.posStart || (a.posEnd && this.scrollTop > a.posEnd)){
			j = this.scrollTop < a.posStart ? 0 : 1;
			styles = {};
			for (prop in a.styles){
				styles[prop] = a.styles[prop][j];
			}
			a.el.style(styles);
			continue;
		}

		// calculate progress
		progress = undefined;
		if (a.posEnd){
			progress = (100 / (a.posEnd - a.posStart)) * (this.scrollTop - a.posStart);
		}

		if (isFunction(a.callback)){
			if (a.triggered) continue;
			a.triggered = true;
			a.callback(a.el, progress);
			continue;
		}

		styles = {};
		for (prop in a.styles){
			s = a.styles[prop][0];
			e = a.styles[prop][1];

			// if both values are integers, it's easy
			if (isNumber(s) && isNumber(e)){
				styles[prop] = s + (((e - s) / 100) * progress);
				continue;
			}

			// find all numbers
			sVals = s.match(/[-0-9]+/g);
			eVals = e.match(/[-0-9]+/g);

			if (sVals.length != eVals.length) continue;

			// interpolate for each found digit pair
			newStr = s.replace(/[-0-9]+/g, '%d');
			for (j = 0; j < sVals.length; j++){
				sj = parseInt(sVals[j], 10);
				ej = parseInt(eVals[j], 10);
				newStr = newStr.replace('%d', sj + (((ej - sj) / 100) * progress));
			}
			styles[prop] = newStr;
		}
		a.el.style(styles);
	}
};

module.exports = ScrollFx;
