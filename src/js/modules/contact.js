/* global google */
'use strict';

var $ = require('elements'),
	debounce = require('mout/function/debounce'),
	scrollFx = new (require('./scrollfx'))(),
	mapStyles = require('./map-styles'),
	contact = $('.contact');

require('moofx');

if (contact){
	var canvas = contact.search('.map-canvas'),
		overlay = contact.search('.map-overlay'),
		contents = contact.search('.contact-content'),
		showMapBtn = contact.search('.show-map'),
		hideMapBtn = contact.search('.hide-map'),
		center = new google.maps.LatLng(52.366394, 4.861973),
		bodyRect = document.body.getBoundingClientRect(),
		map, rect, contactTop;

	var resize = function(){
		map.panTo(center);
	};

	var initialize = function(){
		map = new google.maps.Map(canvas[0], {
			center: center,
			disableDefaultUI: true,
			scrollwheel: false,
			styles: mapStyles,
			zoom: 16
		});

		google.maps.event.addListenerOnce(map, 'idle', function(){
			canvas.style({height: 'auto', bottom: 0});
			google.maps.event.trigger(map, 'resize');
			center = map.getCenter();
			rect = contact[0].getBoundingClientRect();
			contact.style('height', rect.bottom - rect.top);
			contactTop = rect.top - bodyRect.top;

			scrollFx.add({
				el: $('.map-overlay'),
				posStart: contactTop - ((window.innerHeight / 3) * 2),
				posEnd: contactTop - 150,
				styles: {
					transform: ['translateY(-110px)', 'translateY(0)']
				}
			});
		});

		new google.maps.Marker({
			map: map,
			position: center,
			icon: '/img/marker.png'
		});

		$(window).on('resize', debounce(resize, 300));
	};
	google.maps.event.addDomListener(window, 'load', initialize);

	var showMap = function(){
		var header = contact.search('.header-main');
		hideMapBtn.animate({opacity: 1});
		header.animate({opacity: 0});
		overlay.animate({opacity: 0});
		contents.animate({opacity: 0}, {
			callback: function(){
				header.style({display: 'none'});
				overlay.style({display: 'none'});
				contents.style({display: 'none'});
			}
		});
	};

	var hideMap = function(){
		var header = contact.search('.header-main');
		map.panTo(center);
		hideMapBtn.animate({opacity: 0});
		header.style({display: 'block'}).animate({opacity: 1});
		overlay.style({display: 'block'}).animate({opacity: 1});
		contents.style({display: 'block'}).animate({opacity: 1});
	};

	showMapBtn.on('click', function(e){
		e.preventDefault();
		showMap();
	});
	hideMapBtn.on('click', function(e){
		e.preventDefault();
		hideMap();
	});
}
