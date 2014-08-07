'use strict';

var easeInOutQuad = require('kubrick-js/easing/easeInOutQuad');

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
				opacity: -1,
				scale: 0.8
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
					this.style.height = easeInOutQuad((duration / 100) * progress, 787, -207, duration) + 'px';
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
			}
		]
	},
	{
		stage: '.footer-main',
		duration: 1
	}
]);
