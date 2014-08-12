'use strict';

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
