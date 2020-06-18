function initMap() {
	var element = document.getElementById('map');
	var options = {
		zoom: 18,
		center: {lat: 48.472492, lng: 34.992973}
	};

	var myMap = new google.maps.Map(element, options);

	var markers = [
	{
		coordinates: {lat: 48.472492, lng: 34.992973},
		image: '../images/marker.svg',
		info: 'Мы находимся здесь'
	}
	];

	for(var i = 0; i < markers.length; i++){
		addMarker(markers[i]);
	}

	function addMarker(properties){
			var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: myMap
		});

		if(properties.image){
			marker.setIcon(properties.image);
		}
		if(properties.info){
			var InfoWindow = new google.maps.InfoWindow({
			content: properties.info
			});

			marker.addListener('click', function(){
			InfoWindow.open(myMap, marker);
			});
		}
	}
}