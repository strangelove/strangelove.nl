var scrollFx = new (require('./scrollfx'))(),
	$ = require('elements');

var causeLoop = function(el){
	el.addClass('loop');
	setTimeout(function(){ el.removeClass('loop'); }, 1720);
};

$('.services').delegate('mouseover', '.service', function(e, el){
	if (!el.hasClass('loop')) causeLoop(el);
});

scrollFx.add({ el: $('.clarify'), posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.create'),  posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.code'),    posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.connect'), posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.control'), posStart: 500, callback: causeLoop });
