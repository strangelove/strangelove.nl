var scrollFx = new (require('./scrollfx'))(),
	$ = require('elements');

var causeLoop = function(el){
	el.addClass('loop');
	setTimeout(function(){ el.removeClass('loop'); }, 1720);
};

$('.services').delegate('mouseover', '.icon', function(e, el){
	if (!el.hasClass('loop')) causeLoop(el);
});

scrollFx.add({ el: $('.clarify .icon'), posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.create .icon'),  posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.code .icon'),    posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.connect .icon'), posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.control .icon'), posStart: 500, callback: causeLoop });
