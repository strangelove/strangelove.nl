'use strict';

var ContainerHeight = function(el, options){
	if (!(this instanceof ContainerHeight)){
		return new ContainerHeight(el, options);
	}

	var children = el.querySelectorAll(options.selector),
		i, rect, heights = [];

	for (i = 0; i < children.length; i++){
		rect = children[i].getBoundingClientRect();
		heights.push(rect.bottom - rect.top);
	}

	el.style.height = Math.max.apply(null, heights) + 'px';
};

module.exports = ContainerHeight;
