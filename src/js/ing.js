'use strict';

var easeInOutQuad = require('kubrick-js/easing/easeInOutQuad'),
	prefix = require('kubrick-js/lib/vendorprefix')();

require('kubrick-js')([

	{
		duration: '100%',
		easing: 'linear',
		actors: [
			{
				element: '.case-summary',
				translateY: '-25%',
				opacity: -0.7
			},
			{
				element: '.client-description',
				translateY: ['40%', 0],
				opacity: [0, 1]
			}
		]
	},

	{
		duration: '100%',
		actors: [
			{
				element: '.client-description',
				translateY: '-20%',
				opacity: -0.5,
				scale: 0.8
			},
			{
				element: '.ing-logo',
				translateY: ['60%', 0]
			},
			{
				element: '.man',
				translateY: ['80%', 0]
			},
			{
				element: '.ribbon',
				translateY: ['100%', 0]
			}
		]
	},

	{
		duration: '100%',
		actors: [
			{
				element: '.logo-overlay',
				callback: function(progress, duration){
					this.style.width = easeInOutQuad((duration / 100) * progress, 0, 700, duration) + 'px';
				}
			}
		]
	},

	{
		duration: '100%',
		actors: [
			{
				element: '.ing-logo',
				translateY: '-60%'
			},
			{
				element: '.man',
				translateY: '-80%'
			},
			{
				element: '.ribbon',
				translateY: '-100%'
			},
			{
				element: '.brand-description',
				translateY: ['40%', 0],
				opacity: [0, 1]
			}
		]
	},

	{
		duration: '100%',
		actors: [
			{
				element: '.brand-description',
				translateY: '-20%',
				opacity: -0.5,
				scale: 0.8
			},
			{
				element: '.flyer-wrap',
				translateY: ['55%', 0]
			},
			{
				element: '.flyer',
				translateY: ['20%', 0]
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
				translateY: '-60%'
			},
			{
				element: '.flyer',
				translateY: [-33000, -33150]
			},
			{
				element: '.print-description',
				translateY: ['20%', 0],
				opacity: [-1, 1]
			}
		]
	},

	{
		duration: '60%',
		easing: 'linear',
		actors: [
			{
				element: '.print-description',
				translateY: '-12%',
				opacity: 0.6,
				scale: 0.88
			},
			{
				element: '.icons',
				translateY: '-48%'
			},
			{
				element: '.iconography-description',
				translateY: ['60%', '20%'],
				opacity: [0, 1]
			}
		]
	},
	{
		duration: '20%',
		easing: 'linear',
		actors: [
			{
				element: '.print-description',
				translateY: ['-12%', '-20%'],
				opacity: [0.6, 0],
				scale: [0.88, 0.8]
			},
			{
				element: '.icons',
				translateY: ['-48%', '-72%']
			},
			{
				element: '.iconography-description',
				translateY: ['20%', 0]
			},
			{
				element: '.speechbubble',
				translateY: [50, 0]
			},
			{
				element: '.senior',
				translateY: [54, 0]
			},
			{
				element: '.form',
				translateY: [56, 0]
			},
			{
				element: '.envelope',
				translateY: [52, 0]
			},
			{
				element: '.hand',
				translateY: [106, 0]
			},
			{
				element: '.form-hand',
				translateY: [52, 0]
			},
			{
				element: '.moneybag',
				translateY: [100, 0]
			},
			{
				element: '.lock',
				translateY: [104, 0]
			},
			{
				element: '.eye',
				translateY: [102, 0]
			},
			{
				element: '.piggybank',
				translateY: [150, 0]
			},
			{
				element: '.book',
				translateY: [152, 0]
			},
			{
				element: '.suitcase',
				translateY: [204, 0]
			},
			{
				element: '.male',
				translateY: [200, 0]
			}
		]
	},

	{
		duration: '100%',
		actors: [
			{
				element: '.icons',
				translateY: ['-72%', '-120%'],
				opacity: [1.75, 0],
				scale: 0.8
			},
			{
				element: '.iconography-description',
				translateY: '-60%'
			},
			{
				element: '.devices',
				translateY: ['60%', 0]
			},
			{
				element: '.device-ipad',
				translateY: [200, 0]
			},
			{
				element: '.device-iphone',
				translateY: [120, 0]
			}
		]
	},

	{
		stage: '.website',
		duration: '100%',
		actors: [
			{
				element: '.device-imac img',
				translateY: -(1448 - 398)
			},
			{
				element: '.device-ipad img',
				translateY: -(661 - 322)
			},
			{
				element: '.device-iphone img',
				translateY: -(448 - 179)
			},
			{
				element: '.scrolltrack',
				translateY: 480
			}
		]
	},

	{
		duration: '100%',
		actors: [
			{
				element: '.devices',
				translateY: '-60%'
			},
			{
				element: '.device-ipad',
				translateY: -120
			},
			{
				element: '.device-iphone',
				translateY: -200
			},
			{
				element: '.website-description',
				translateY: ['20%', 0],
				opacity: [-1, 1]
			}
		]
	},

	{
		duration: '50%',
		easing: 'linear',
		actors: [
			{
				element: '.website-description',
				translateY: '-10%',
				opacity: 0.7,
				scale: 0.9
			},
			{
				element: '.infographics-ipad',
				translateY: ['74%', '37%']
			}
		]
	},
	{
		duration: '50%',
		easing: 'linear',
		actors: [
			{
				element: '.website-description',
				translateY: ['-10%', '-20%'],
				opacity: [0.7, -0.4],
				scale: [0.9, 0.8]
			},
			{
				element: '.infographics-ipad',
				translateY: ['37%', 0]
			},
			{
				element: '.el1',
				translateY: [-260, 0]
			},
			{
				element: '.el2',
				translateY: [-240, 0]
			},
			{
				element: '.el3',
				translateY: [-220, 0]
			},
			{
				element: '.el4',
				translateY: [-200, 0]
			},
			{
				element: '.el5',
				translateY: [-180, 0]
			},
			{
				element: '.el6',
				translateY: [-160, 0]
			},
			{
				element: '.el7',
				translateY: [-140, 0]
			},
			{
				element: '.el8',
				translateY: [-120, 0]
			},
			{
				element: '.el9',
				translateY: [-100, 0]
			}
		]
	},

	{
		duration: '100%',
		actors: [
			{
				element: '.infographics-ipad',
				translateY: '-65%'
			},
			{
				element: '.infographics-description',
				translateY: ['20%', 0],
				opacity: [-1, 1]
			}
		]
	},

	{
		duration: '100%',
		actors: [
			{
				element: '.infographics-description',
				translateY: '-10%',
				opacity: -0.5,
				scale: 0.8
			},
			{
				element: '.mobile-screen-1',
				translateX: [300, 0],
				translateY: ['60%', 0]
			},
			{
				element: '.mobile-screen-2',
				translateX: [200, 0],
				translateY: ['60%', 0]
			},
			{
				element: '.mobile-screen-3',
				translateX: [100, 0],
				translateY: ['60%', 0]
			},
			{
				element: '.mobile-description',
				translateY: ['60%', 0],
				opacity: [0, 1]
			}
		]
	// },

	// // mobile
	// {
	// 	stage: '.mobile',
	// 	duration: '100%'
	// },

	// // testimonial
	// {
	// 	stage: '.testimonial',
	// 	duration: '100%'
	},

	{
		stage: '.footer-main',
		duration: '100%'
	}
]);
