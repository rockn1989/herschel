$(function() {
	if($('div').is('.delivery-map #map')) {
	  var myMap;
		ymaps.ready(init); 
		function init () {
			myMap = new ymaps.Map("map", {
				center: [55.789859, 37.397676], 
				zoom: 7,
				controls: []
			});

			var Placemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: '',
				balloonContent: ''
			}, {
				iconLayout: 'default#image',
				iconImageHref: '../img/ui/baloon-img.png',
				iconImageSize: [32,38],
				iconImageOffset:[0, 0]
			});

			myMap.geoObjects.add(Placemark);
	}};
});
