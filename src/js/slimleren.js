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
		stage: '.footer-main',
		duration: 1
	}
]);
