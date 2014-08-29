'use strict';

var easeInOutQuad = require('kubrick-js/easing/easeInOutQuad'),
	prefix = require('kubrick-js/lib/vendorprefix')();

require('./modules/back-to-top');

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
				element: '.client-cup',
				translateX: -200,
				translateY: '-90%'
			},
			{
				element: '.client-strawberry',
				translateX: -160,
				translateY: '-90%'
			},
			{
				element: '.client-orange',
				translateX: -60,
				translateY: '-90%'
			},
			{
				element: '.client-leaves',
				translateX: -400,
				translateY: '-90%'
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
				element: '.client-cup',
				translateX: [-200, -200],
				translateY: ['-90%', '-130%']
			},
			{
				element: '.client-strawberry',
				translateX: [-160, -160],
				translateY: ['-90%', '-145%']
			},
			{
				element: '.client-orange',
				translateX: [-60, -60],
				translateY: ['-90%', '-135%']
			},
			{
				element: '.client-leaves',
				translateX: [-400, -400],
				translateY: ['-90%', '-125%']
			},
			{
				element: '.desc-client',
				translateY: ['-65%', '-70%'],
				opacity: -1
			},
			{
				element: '.leaves1',
				translateX: 40,
				translateY: '-105%'
			},
			{
				element: '.leaves2',
				translateX: -30,
				translateY: '-115%'
			},
			{
				element: '.brand-wrap',
				translateY: '-100%'
			},
			{
				element: '.desc-brand',
				translateY: '-120%',
				opacity: [-2, 1]
			},
			{
				element: '.circles',
				translateY: '-100%'
			}
		]
	},
	{
		duration: '50%',
		actors: [
			{
				element: '.client-cup',
				translateY: ['-200%', '-200%']
			},
			{
				element: '.client-strawberry',
				translateY: ['-200%', '-200%']
			},
			{
				element: '.client-orange',
				translateY: ['-200%', '-200%']
			},
			{
				element: '.client-leaves',
				translateY: ['-200%', '-200%']
			},
			{
				element: '.brand-wrap',
				callback: function(progress, duration){
					this.style.height = easeInOutQuad((duration / 100) * progress, 625, -207, duration) + 'px';
				}
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.leaves1',
				translateX: [40, 0],
				translateY: ['-105%', '-170%']
			},
			{
				element: '.leaves2',
				translateX: [-30, 0],
				translateY: ['-115%', '-160%']
			},
			{
				element: '.brand-wrap',
				translateY: ['-100%', '-200%']
			},
			{
				element: '.circles',
				translateY: ['-100%', '-200%']
			},
			{
				element: '.desc-brand',
				translateY: ['-120%', '-240%'],
				opacity: -1
			},
			{
				element: '.logo-final',
				translateY: '-65%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.logo-final',
				translateY: ['-65%', '-125%']
			},
			{
				element: '.flyer-bg',
				translateY: '-100%'
			},
			{
				element: '.leaves3',
				translateX: -30,
				translateY: -120
			},
			{
				element: '.circle-splatter',
				translateY: -100
			},
			{
				element: '.flyer1',
				translateX: '30%',
				translateY: '-130%'
			},
			{
				element: '.flyer2',
				translateX: '-30%',
				translateY: '-120%'
			},
			{
				element: '.desc-print',
				translateY: '-120%',
				opacity: [-2, 1]
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.flyer-bg',
				translateY: ['-100%', '-200%']
			},
			{
				element: '.flyer1',
				translateX: ['30%', '60%'],
				translateY: ['-130%', '-240%']
			},
			{
				element: '.flyer2',
				translateX: ['-30%', '-60%'],
				translateY: ['-120%', '-280%']
			},
			{
				element: '.desc-print',
				translateY: ['-120%', '-240%'],
				opacity: -1
			},
			{
				element: '.product-wrap',
				translateY: '-90%'
			},
			{
				element: '.desc-design',
				translateY: '-90%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.product-carousel',
				callback: function(progress){
					var currentFrame = Math.ceil((37 / 100) * progress) || 1,
						pos = (currentFrame - 1) * 415;
					this.style[prefix + 'Transform'] = 'translateY(-' + pos + 'px)';
				}
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.product-wrap',
				translateY: ['-90%', '-190%']
			},
			{
				element: '.desc-design',
				translateY: ['-90%', '-190%']
			},
			{
				element: '.photos-wrap',
				translateY: '-100%'
			},
			{
				element: '.photo1',
				translateY: '-100%'
			},
			{
				element: '.photo2',
				translateY: '-70%'
			},
			{
				element: '.photo3',
				translateY: ['30%', '-105%']
			},
			{
				element: '.leaves4',
				translateY: -100
			},
			{
				element: '.circle-red',
				translateX: -30
			},
			{
				element: '.desc-result',
				translateY: '-120%',
				opacity: [-2, 1]
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.photos-wrap',
				translateY: ['-100%', '-200%']
			},
			{
				element: '.desc-result',
				translateY: ['-120%', '-220%']
			},
			{
				element: '.other-cases',
				translateY: ['30%', '-90%']
			},
			{
				element: '.footer-main',
				translateY: '-100%'
			}
		]
	}
]);
