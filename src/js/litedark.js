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
		stage: '.footer-main',
		duration: 1
	}
]);
