
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },


    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { enableHighAccuracy: true });
    }
};

app.initialize();

var onMapSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getMap(Latitude, Longitude);
	alert("Latitud= " + Latitude + " //  Longitud= " + Longitude)
}

function crear_mapa (){
	
	var cordenadas = new google.maps.Lating(Latitude,Longitude);
	var mapOptions = {
		center: latLong,
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		
		};
		
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	}


function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
function getMap(latitude, longitude) {

    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);


    var latLong = new google.maps.LatLng(latitude, longitude);

    var marker = new google.maps.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}