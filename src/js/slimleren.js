'use strict';

var $ = require('elements'),
	clamp = require('mout/math/clamp'),
	easeInOutQuad = require('kubrick-js/easing/easeInOutQuad'),
	prefix = require('kubrick-js/lib/vendorprefix')(),
	timestamp = new Date().getTime(),
	phoneReplaced, visualsReplaced;

var owls = [
	{
		owl: $('.char-owl1 .owl'),
		wings: $('.char-owl1 .wing-left, .char-owl1 .wing-right')
	},
	{
		owl: $('.char-owl2 .owl'),
		wings: $('.char-owl2 .wing-left, .char-owl2 .wing-right')
	},
	{
		owl: $('.char-owl3 .owl'),
		wings: $('.char-owl3 .wing-left, .char-owl3 .wing-right')
	},
	{
		owl: $('.char-owl4 .owl'),
		wings: $('.char-owl4 .wing-left, .char-owl4 .wing-right')
	}
];

require('kubrick-js')([
	{
		duration: '75%',
		actors: [
			{
				element: '.mood',
				translateY: -1000
			},
			{
				element: '.case-summary',
				translateY: '-40%',
				opacity: -1
			},
			{
				element: '.desc-client',
				translateY: '-65%'
			},
			{
				element: '.feather1',
				translateY: '-80%'
			},
			{
				element: '.feather2',
				translateY: '-75%'
			},
			{
				element: '.feather3',
				translateY: '-65%'
			},
			{
				element: '.feather4',
				translateY: ['5%', '-45%']
			},
			{
				element: '.client-phone',
				translateY: '-77%'
			},
			{
				element: '.client-phone',
				callback: function(){
					if (phoneReplaced) return;
					phoneReplaced = true;
					var bgImage = window.getComputedStyle(this).backgroundImage;
					bgImage = bgImage.replace('-begin', '');
					bgImage = bgImage.replace(')', '?' + timestamp + ')');
					this.style.backgroundImage = bgImage;
				}
			},
			{
				element: '.client-teacher',
				translateY: '-85%'
			},
			{
				element: '.client-student',
				translateY: '-75%'
			},
			{
				element: '.client-clock',
				translateY: '-85%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.desc-client',
				translateY: ['-65%', '-185%'],
				opacity: -1
			},
			{
				element: '.feather1',
				translateY: ['-80%', '-180%']
			},
			{
				element: '.feather2',
				translateY: ['-75%', '-180%']
			},
			{
				element: '.feather3',
				translateY: ['-65%', '-180%']
			},
			{
				element: '.feather4',
				translateY: ['-45%', '-180%']
			},
			{
				element: '.client-phone',
				translateY: ['-77%', '-150%']
			},
			{
				element: '.client-teacher',
				translateY: ['-85%', '-220%']
			},
			{
				element: '.client-student',
				translateY: ['-75%', '-180%']
			},
			{
				element: '.client-clock',
				translateY: ['-85%', '-180%']
			},
			{
				element: '.char-owl1',
				translateY: '-85%'
			},
			{
				element: '.char-owl2',
				translateY: '-85%'
			},
			{
				element: '.char-owl3',
				translateY: '-85%'
			},
			{
				element: '.char-owl4',
				translateY: '-85%'
			},
			{
				element: '.char-owl1 .owl',
				callback: function(progress){
					var i, owl, start, end, prgrs, pos, opacity, left, right;
					for (i = 0; i < owls.length; i++){
						owl = owls[i];
						start = i * 10;
						end = 100 - ((owls.length - (i + 1)) * 10);
						prgrs = clamp(progress, start, end) - start;
						pos = easeInOutQuad(prgrs, -100, 100, end - start);
						opacity = easeInOutQuad(prgrs, 0, 1.5, end - start);
						left = easeInOutQuad(prgrs, 150, -150, end - start);
						right = easeInOutQuad(prgrs, -150, 150, end - start);
						owl.owl[0].style[prefix + 'Transform'] = 'translateY(' + pos + 'px)';
						owl.owl[0].style.opacity = opacity;
						owl.wings[0].style[prefix + 'Transform'] = 'rotate(' + left + 'deg)';
						owl.wings[1].style[prefix + 'Transform'] = 'rotate(' + right + 'deg)';
					}
				}
			},
			{
				element: '.desc-character',
				translateY: '-120%',
				opacity: [-2, 1]
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.char-owl1',
				translateY: ['-85%', '-175%']
			},
			{
				element: '.char-owl2',
				translateY: ['-85%', '-175%']
			},
			{
				element: '.char-owl3',
				translateY: ['-85%', '-175%']
			},
			{
				element: '.char-owl4',
				translateY: ['-85%', '-175%']
			},
			{
				element: '.desc-character',
				translateY: ['-120%', '-240%'],
				opacity: -1
			},
			{
				element: '.visuals-animation',
				translateY: '-80%'
			},
			{
				element: '.visuals-animation',
				callback: function(){
					if (visualsReplaced) return;
					visualsReplaced = true;
					var bgImage = window.getComputedStyle(this).backgroundImage;
					bgImage = bgImage.replace('-begin', '');
					bgImage = bgImage.replace(')', '?' + timestamp + ')');
					this.style.backgroundImage = bgImage;
				}
			},
			{
				element: '.visuals-controller',
				translateY: '-82%'
			},
			{
				element: '.visuals-ball',
				translateY: '-90%'
			},
			{
				element: '.visuals-note',
				translateY: '-93%'
			},
			{
				element: '.desc-visuals',
				translateY: '-55%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.visuals-animation',
				translateY: ['-80%', '-220%']
			},
			{
				element: '.visuals-controller',
				translateY: ['-82%', '-180%']
			},
			{
				element: '.visuals-ball',
				translateY: ['-90%', '-180%']
			},
			{
				element: '.visuals-note',
				translateY: ['-93%', '-180%']
			},
			{
				element: '.desc-visuals',
				translateY: ['-55%', '-155%']
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.expl-bg',
				translateY: '-50%'
			},
			{
				element: '.expl-screen',
				translateY: '-135%'
			},
			{
				element: '.expl-book1',
				translateY: 530
			},
			{
				element: '.expl-book2',
				translateY: 500
			},
			{
				element: '.expl-book3',
				translateY: 600
			},
			{
				element: '.expl-glasses',
				translateY: 450
			},
			{
				element: '.desc-explanimation',
				translateY: '-120%',
				opacity: [-2, 1]
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.expl-bg',
				translateY: ['-50%', '-240%']
			},
			{
				element: '.expl-screen',
				translateY: ['-135%', '-240%']
			},
			{
				element: '.desc-explanimation',
				translateY: ['-120%', '-240%'],
				opacity: -1
			}
		]
	},
	{
		stage: '.footer-main',
		duration: 1
	}
]);
