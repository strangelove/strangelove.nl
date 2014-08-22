'use strict';

var easeInOutQuad = require('kubrick-js/easing/easeInOutQuad'),
	prefix = require('kubrick-js/lib/vendorprefix')();

require('kubrick-js')([
	{
		duration: '100%',
		easing: 'linear',
		actors: [
			{
				element: '.mood',
				translateY: -1000
			},
			{
				element: '.case-summary',
				translateY: '-25%',
				opacity: -1.2
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
				element: '.desc-client',
				translateY: ['-65%', '-120%'],
				opacity: -1
			},
			{
				element: '.brand-logo',
				translateY: '-85%'
			},
			{
				element: '.brand-man',
				translateY: ['15%', '-85%']
			},
			{
				element: '.brand-ribbon',
				translateY: ['30%', '-85%']
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
				element: '.brand-logo',
				translateY: ['-85%', '-200%']
			},
			{
				element: '.brand-man',
				translateY: ['-85%', '-215%']
			},
			{
				element: '.brand-ribbon',
				translateY: ['-85%', '-240%']
			},
			{
				element: '.desc-brand',
				translateY: '-65%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.desc-brand',
				translateY: ['-65%', '-120%'],
				opacity: -1
			},
			{
				element: '.flyer-wrap',
				translateY: '-100%'
			},
			{
				element: '.flyer',
				translateY: ['20%', 0]
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
		duration: '80%',
		easing: 'linear',
		actors: [
			{
				element: '.flyer-wrap',
				translateY: ['-100%', '-180%']
			},
			{
				element: '.flyer',
				translateY: [-33000, -33120]
			},
			{
				element: '.desc-print',
				translateY: ['-120%', '-200%']
			},
			{
				element: '.icons',
				translateY: '-84%'
			}
		]
	},
	{
		duration: '20%',
		easing: 'linear',
		actors: [
			{
				element: '.flyer-wrap',
				translateY: ['-180%', '-200%']
			},
			{
				element: '.flyer',
				translateY: [-33120, -33150]
			},
			{
				element: '.desc-print',
				translateY: ['-200%', '-220%'],
				opacity: 0
			},
			{
				element: '.icons',
				translateY: ['-84%', '-105%']
			},
			{
				element: '.desc-iconography',
				translateY: ['-30%', '-60%'],
				opacity: [0, 1]
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
				translateY: ['-105%', '-205%'],
				opacity: [2, 0]
			},
			{
				element: '.desc-iconography',
				translateY: ['-60%', '-160%']
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
				translateY: -(1448 - 398)
			},
			{
				element: '.device-ipad img',
				translateY: -(661 - 322)
			},
			{
				element: '.device-iphone img',
				translateY: -(448 - 179)
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
				element: '.desc-website',
				translateY: '-65%'
			}
		]
	},
	{
		duration: '80%',
		easing: 'linear',
		actors: [
			{
				element: '.desc-website',
				translateY: ['-65%', '-109%'],
				opacity: -0.6
			},
			{
				element: '.infographics-ipad',
				translateY: '-88%'
			}
		]
	},
	{
		duration: '20%',
		easing: 'linear',
		actors: [
			{
				element: '.infographics-ipad',
				translateY: ['-88%', '-110%']
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
				translateY: ['-110%', '-210%']
			},
			{
				element: '.desc-infographics',
				translateY: '-65%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.desc-infographics',
				translateY: ['-65%', '-120%'],
				opacity: -1
			},
			{
				element: '.mobile-screen-1',
				translateX: '-10%',
				translateY: '-80%'
			},
			{
				element: '.mobile-screen-2',
				translateX: '-5%',
				translateY: '-80%'
			},
			{
				element: '.mobile-screen-3',
				translateY: '-80%'
			},
			{
				element: '.desc-mobile',
				translateY: '-50%'
			}
		]
	},
	{
		duration: '100%',
		actors: [
			{
				element: '.mobile-screen-1',
				translateX: ['-10%', 0],
				translateY: ['-80%', '-180%']
			},
			{
				element: '.mobile-screen-2',
				translateX: ['-5%', 0],
				translateY: ['-80%', '-180%']
			},
			{
				element: '.mobile-screen-3',
				translateY: ['-80%', '-180%']
			},
			{
				element: '.desc-mobile',
				translateY: ['-50%', '-200%']
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
