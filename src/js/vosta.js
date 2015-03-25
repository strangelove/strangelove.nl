'use strict';

var $ = require('elements'),
	clamp = require('mout/math/clamp'),
	easeInOutQuad = require('kubrick-js/easing/easeInOutQuad'),
	prefix = require('kubrick-js/lib/vendorprefix')(),
	windowWidth = window.innerWidth,
	editLeft = document.querySelector('.retouch-wrap .edit-left'),
	editRight = document.querySelector('.retouch-wrap .edit-right'),
	icons = [
		$('.icon-graduate, .icon-sail'),
		$('.icon-calendar, .icon-island'),
		$('.icon-cog, .icon-leaf'),
		$('.icon-growth, .icon-users'),
		$('.icon-briefcase, .icon-brains'),
		$('.icon-temple, .icon-certificate'),
		$('.icon-form, .icon-globe'),
		$('.icon-pencil, .icon-pen')
	],
	lines = $('.line-1, .line-2, .line-3');

require('./modules/menu');
require('./modules/back-to-top');

require('kubrick-js')([
	{
		duration: '100%',
		easing: 'linear',
		actors: [
			{
				element: '.mood',
				translateY: '-100%'
			},
			{
				element: '.mood-sky',
				translateY: '100%',
				scale: 1.2
			},
			{
				element: '.mood-waves',
				translateY: '100%',
				scale: 1.2
			},
			{
				element: '.mood-ship',
				scale: 1.2
			},
			{
				element: '.case-summary',
				translateY: '100%'
			},
			{
				element: '.arrow-wrap',
				translateY: '100%'
			},
			{
				element: '.client-ship-back',
				translateY: '-165%'
			},
			{
				element: '.client-ship-front',
				translateY: '-155%'
			},
			{
				element: '.desc-client',
				translateY: '-145%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.client-ship-back',
				translateY: ['-165%', '-250%']
			},
			{
				element: '.client-ship-front',
				translateX: '-10%',
				translateY: ['-155%', '-260%']
			},
			{
				element: '.desc-client',
				translateY: ['-145%', '-250%']
			},
			{
				element: '.grey-case',
				translateY: '-100%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.grey-case',
				translateY: ['-100%','-250%']
			},
			{
				element: '.cards',
				translateY: '-100%'
			},
			{
				element: '.cards-cards',
				translateY: ['0','-10%']
			},
			{
				element: '.cards-phone',
				translateX: ['-95%','5%'],
				translateY: ['95%','-5%']
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.cards',
				translateY: ['-100%','-300%']
			},
			{
				element: '.cards-cards',
				translateY: ['-10%','-20%']
			},
			{
				element: '.cards-phone',
				translateX: ['5%', '105%'],
				translateY: ['-5%', '-105%']
			}
		]
	},
	/* !!! done until here !!! */
	{
		duration: '100%',
		actors: [
			{
				element: '.retouch-wrap',
				translateY: ['-100%', '-240%']
			},
			{
				element: '.desc-step',
				translateY: ['-100%', '-200%'],
				opacity: -1
			},
			{
				element: '.device-imac',
				translateY: ['25%', '-90%']
			},
			{
				element: '.device-ipad',
				translateY: ['15%', '-90%']
			},
			{
				element: '.device-iphone',
				translateY: [0, '-90%']
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.device-imac img',
				translateY: -(1246 - 398)
			},
			{
				element: '.device-ipad img',
				translateY: -(561 - 322)
			},
			{
				element: '.device-iphone img',
				translateY: -(462 - 179)
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.device-imac',
				translateY: ['-90%', '-190%']
			},
			{
				element: '.device-ipad',
				translateY: ['-90%', '-200%']
			},
			{
				element: '.device-iphone',
				translateY: ['-90%', '-210%']
			},
			{
				element: '.desc-corporate',
				translateY: '-65%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.desc-corporate',
				translateY: ['-65%', '-120%'],
				opacity: -1
			},
			{
				element: '.desc-icons',
				translateY: '-100%'
			},
			{
				element: '.icons',
				translateY: '-105%'
			},
			{
				element: '.icons ul',
				callback: function(progress){
					var i, icon, start, end, prgrs, x, y, j;
					for (i = 0; i < icons.length; i++){
						icon = icons[i];
						start = i * 4;
						end = 100 - ((icons.length - (i + 1)) * 4);
						prgrs = clamp(progress, start, end) - start;
						x = easeInOutQuad(prgrs, -407, 407, end - start);
						y = easeInOutQuad(prgrs, -200, 200, end - start);
						for (j = 0; j < icon.length; j++){
							icon[j].style[prefix + 'Transform'] = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
						}
					}
				}
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.desc-icons',
				translateY: ['-100%', '-200%'],
				opacity: -1
			},
			{
				element: '.icons',
				translateY: ['-105%', '-250%']
			},
			{
				element: '.icons ul'
			},
			{
				element: '.desc-devices',
				translateY: '-95%'
			},
			{
				element: '.md-case',
				translateX: '10%',
				translateY: '-90%'
			},
			{
				element: '.md-ipad',
				translateX: '15%',
				translateY: ['10%', '-85%']
			},
			{
				element: '.md-pen',
				translateX: '-5%',
				translateY: ['15%', '-65%%']
			},
			{
				element: '.md-iphone',
				translateX: '-5%',
				translateY: ['20%', '-62%']
			},
			{
				element: '.md-macbook',
				translateX: '-10%',
				translateY: '-100%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.desc-devices',
				translateY: ['-95%', '-180%'],
				opacity: -1
			},
			{
				element: '.md-case',
				translateX: ['10%', '10%'],
				translateY: ['-90%', '-240%']
			},
			{
				element: '.md-ipad',
				translateX: ['15%', '15%'],
				translateY: ['-85%', '-250%']
			},
			{
				element: '.md-pen',
				translateX: ['-5%', '8%'],
				translateY: ['-65%', '-240%']
			},
			{
				element: '.md-iphone',
				translateX: ['-5%', '5%'],
				translateY: ['-62%', '-220%']
			},
			{
				element: '.md-macbook',
				translateX: ['-10%', '-10%'],
				translateY: ['-100%', '-220%']
			},
			{
				element: '.desc-hr',
				translateY: '-65%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.desc-hr',
				translateY: ['-65%', '-70%'],
				opacity: -1
			},
			{
				element: '.hr-ipad',
				translateY: '-65%'
			},
			{
				element: '.hr-layer1',
				translateY: -274
			},
			{
				element: '.hr-layer2',
				translateY: -137
			},
			{
				element: '.line-1',
				callback: function(progress){
					for (var i = 0; i < lines.length; i++){
						lines[i].style.height = easeInOutQuad(progress, 0, 274, 100) + 'px';
					}
				}
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.hr-ipad',
				translateY: ['-65%', '-180%']
			},
			{
				element: '.hr-layer1',
				translateY: [-274, 0]
			},
			{
				element: '.hr-layer2',
				translateY: [-137, 0]
			},
			{
				element: '.line-1',
				callback: function(progress){
					for (var i = 0; i < lines.length; i++){
						lines[i].style.height = easeInOutQuad(progress, 274, -274, 100) + 'px';
					}
				}
			},
			{
				element: '.cal-views',
				translateY: '-95%'
			},
			{
				element: '.desc-calendar',
				translateY: '-100%'
			},
			{
				element: '.cal-1',
				translateX: 50,
				translateY: [-50, 0]
			},
			{
				element: '.cal-2',
				translateX: 150,
				translateY: [-150, 0]
			},
			{
				element: '.cal-3',
				translateX: 300,
				translateY: [-300, 0]
			},
			{
				element: '.cal-4',
				translateX: 500,
				translateY: [-500, 0]
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.cal-views',
				translateY: ['-95%', '-200%']
			},
			{
				element: '.desc-calendar',
				translateY: ['-100%', '-200%']
			},
			{
				element: '.cal-1',
				translateX: [50, 0],
				translateY: -50
			},
			{
				element: '.cal-2',
				translateX: [150, 0],
				translateY: -150
			},
			{
				element: '.cal-3',
				translateX: [300, 0],
				translateY: -300
			},
			{
				element: '.cal-4',
				translateX: [500, 0],
				translateY: -500
			},
			{
				element: '.battle-hero1',
				translateX: 100,
				translateY: '-98%'
			},
			{
				element: '.battle-hero2',
				translateX: -140,
				translateY: '-60%'
			},
			{
				element: '.battle-hero3',
				translateX: -70,
				translateY: '-60%'
			},
			{
				element: '.battle-hero4',
				translateY: '-60%'
			},
			{
				element: '.desc-battle',
				translateY: '-50%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.battle-hero1',
				translateX: [100, 300],
				translateY: ['-98%', '-196%']
			},
			{
				element: '.battle-hero2',
				translateX: [-140, '20%'],
				translateY: ['-60%', '-200%']
			},
			{
				element: '.battle-hero3',
				translateX: [-70, '20%'],
				translateY: ['-60%', '-200%']
			},
			{
				element: '.battle-hero4',
				translateX: [0, '20%'],
				translateY: ['-60%', '-200%']
			},
			{
				element: '.desc-battle',
				translateY: ['-50%', '-70%'],
				opacity: -1
			},
			{
				element: '.flyer-wrap',
				translateY: '-100%'
			},
			{
				element: '.desc-print',
				translateY: '-120%',
				opacity: [-2, 1]
			}
		]
	},
	{
		duration: '150%',
		actors: [
			{
				element: '.flyer',
				callback: function(progress){
					var currentFrame = Math.ceil((42 / 100) * progress) || 1,
						pos = (currentFrame - 1) * 600;
					this.style[prefix + 'Transform'] = 'translateY(-' + pos + 'px)';
				}
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.flyer-wrap',
				translateY: ['-100%', '-200%']
			},
			{
				element: '.desc-print',
				translateY: ['-120%', '-220%'],
				opacity: -1
			},
			{
				element: '.other-cases',
				translateY: '-90%'
			},
			{
				element: '.footer-main',
				translateY: '-100%'
			}
		]
	}
]);

var wrap = document.querySelector('.retouch-wrap');
if (wrap){
	wrap.style.maxHeight = (window.innerHeight - 300) + 'px';
}

var positionIcons = function(){
	var ul = document.querySelector('.icons ul');
	if (!ul) return;

	var rect = ul.getBoundingClientRect(),
		iconsWidth = rect.right - rect.left,
		docWidth = window.innerWidth,
		marginLeft = (docWidth - iconsWidth) / 2,
		marginTop = 90 + (marginLeft * 0.5);

	ul.style.marginTop = marginTop + 'px';
	ul.style.marginLeft = marginLeft + 'px';
};
positionIcons();
