'use strict';

require('./modules/back-to-top');

var $ = require('elements');

var causeLoop = function(el){
	el.addClass('loop');
	setTimeout(function(){ el.removeClass('loop'); }, 2240);
};

$('.vision-icons').delegate('mouseover', '.vision-icon', function(e, el){
	if (!el.hasClass('loop')) causeLoop(el);
});

$('.services').delegate('mouseover', '.service-icon', function(e, el){
	if (!el.hasClass('loop')) causeLoop(el);
});
