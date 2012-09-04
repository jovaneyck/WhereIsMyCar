module("QUnit");

test( "QUnit sanity check", function() {
	var aString = "a string"
		ok( aString == aString, "QUnit should be working correctly!" );
});

 module("GoogleMapsAPI");
 
 test( "Google Maps API sanity check", function() {
	 var mapId = 'mapArea';
	 
	 $('#qunit').prepend('<div id='+mapId+'></div>');
	 var API = new GoogleMapsAPI();

	 var latitude = -34.397;
	 var longitude = 150.644;
	 
	 
	 var map = API.showLocationOnMap(mapId, latitude, longitude);
	
	 ok(map != undefined, 'showLocationOnMap should return a map object.');
});
