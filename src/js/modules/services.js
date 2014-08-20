var scrollFx = new (require('./scrollfx'))(),
	$ = require('elements');

var causeLoop = function(el){
	el.addClass('loop');
	setTimeout(function(){ el.removeClass('loop'); }, 1720);
};

$('.services').delegate('mouseover', '.icon', function(e, el){
	if (!el.hasClass('loop')) causeLoop(el);
});

scrollFx.add({ el: $('.s1 .icon'), posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.s2 .icon'), posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.s3 .icon'), posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.s4 .icon'), posStart: 500, callback: causeLoop });
scrollFx.add({ el: $('.s5 .icon'), posStart: 500, callback: causeLoop });
