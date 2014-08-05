'use strict';

var easeInOutQuad = require('kubrick-js/easing/easeInOutQuad'),
	prefix = require('kubrick-js/lib/vendorprefix')();

var windowWidth = window.innerWidth,
	editLeft = document.querySelector('.retouch-wrap .edit-left'),
	editRight = document.querySelector('.retouch-wrap .edit-right');

require('kubrick-js')([
	{
		duration: '75%',
		easing: 'linear',
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
				element: '.client-briefcase',
				translateY: '-75%'
			},
			{
				element: '.client-watch',
				translateX: 175,
				translateY: '-75%'
			},
			{
				element: '.client-phone',
				translateX: 150,
				translateY: '-75%'
			},
			{
				element: '.desc-client',
				translateY: '-65%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.client-briefcase',
				translateX: -606,
				translateY: ['-75%', '-75%']
			},
			{
				element: '.client-watch',
				translateX: [175, -600],
				translateY: ['-75%', '-75%']
			},
			{
				element: '.client-phone',
				translateX: [150, -700],
				translateY: ['-75%', '-75%']
			},
			{
				element: '.desc-client',
				translateY: ['-65%', '-70%'],
				scale: 0.8,
				opacity: -1
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
				translateX: [-140, '100%'],
				translateY: ['-60%', '-200%']
			},
			{
				element: '.battle-hero3',
				translateX: [-70, '80%'],
				translateY: ['-60%', '-200%']
			},
			{
				element: '.battle-hero4',
				translateX: [0, '60%'],
				translateY: ['-60%', '-200%']
			},
			{
				element: '.desc-battle',
				translateY: ['-50%', '-70%'],
				opacity: -1,
				scale: 0.8
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
					var currentFrame = Math.ceil((55 / 100) * progress) || 1,
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
				element: '.flyer',
				translateY: [-33000, -33150]
			},
			{
				element: '.desc-print',
				translateY: ['-120%', '-220%'],
				opacity: -1
			},
			{
				element: '.retouch-wrap',
				translateY: '-100%'
			},
			{
				element: '.desc-step',
				translateY: '-100%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.retouch-wrap',
				callback: function(progress, duration){
					var width = easeInOutQuad((duration / 100) * progress, 0, windowWidth, duration);
					editLeft.style.width = (width / 2) + 'px';
					editRight.style.width = (width / 2) + 'px';
				}
			}
		]
	},
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
				opacity: -1,
				scale: 0.8
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
		duration: '80%',
		easing: 'linear',
		actors: [
			{
				element: '.desc-corporate',
				translateY: ['-65%', '-109%'],
				opacity: -0.6,
				scale: 0.86
			},
			{
				element: '.desc-icons',
				translateY: '-80%'
			},
			{
				element: '.icons',
				translateY: '-80%'
			}
		]
	},
	{
		duration: '20%',
		easing: 'linear',
		actors: [
			{
				element: '.desc-icons',
				translateY: ['-80%', '-100%']
			},
			{
				element: '.icons',
				translateY: ['-80%', '-100%']
			}
		]
	},
	{
		stage: '.footer-main',
		duration: 1
	}
]);

var wrap = document.querySelector('.retouch-wrap');
if (wrap){
	wrap.style.maxHeight = (window.innerHeight - 300) + 'px';
}
