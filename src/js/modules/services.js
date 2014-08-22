var $ = require('elements');

var causeLoop = function(el){
	el.addClass('loop');
	setTimeout(function(){ el.removeClass('loop'); }, 1720);
};

$('.services').delegate('mouseover', '.icon', function(e, el){
	if (!el.hasClass('loop')) causeLoop(el);
});
