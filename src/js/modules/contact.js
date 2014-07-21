/* global google */
'use strict';

var $ = require('elements'),
	mapStyles = require('./map-styles'),
	contact = $('.contact');

require('moofx');

if (contact){
	var header = contact.search('.header-main'),
		rect = contact[0].getBoundingClientRect(),
		canvas = contact.search('.map-canvas'),
		contents = contact.search('.contact-content'),
		showMapBtn = contact.search('.show-map'),
		hideMapBtn = contact.search('.hide-map'),
		center = new google.maps.LatLng(52.366394, 4.861973),
		map;

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
			contact.style('height', rect.bottom - rect.top);
		});

		new google.maps.Marker({
			map: map,
			position: center
		});
	};
	google.maps.event.addDomListener(window, 'load', initialize);

	var showMap = function(){
		hideMapBtn.animate({opacity: 1});
		header.animate({opacity: 0});
		contents.animate({opacity: 0}, {
			callback: function(){
				header.style({display: 'none'});
				contents.style({display: 'none'});
			}
		});
	};

	var hideMap = function(){
		map.panTo(center);
		hideMapBtn.animate({opacity: 0});
		header.style({display: 'block'}).animate({opacity: 1});
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
