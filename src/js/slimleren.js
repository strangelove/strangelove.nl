'use strict';

var timestamp = new Date().getTime(),
	phoneReplaced;

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
