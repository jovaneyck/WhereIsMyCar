module("QUnit and test libraries");

test( "QUnit sanity check", function() {
	var aString = "a string"
		ok( aString == aString, "QUnit should be working correctly!" );
});

module("Camera");

test("Camera sanity check", function(){
	 ok(CameraAPI, 'Camera api should be loaded');
});

test("Camera take picture", function(){
	var expected = "imageBase64Encoded";
	
	function camMock(onSuccess, onFail){
		onSuccess(expected);
	};
	
	var actual;
	
	function persistenceMock(imgURI){
		actual = imgURI;
	}
	
	function NOP(){}
	
	CameraAPI.initialize(camMock, persistenceMock,NOP);
	
	CameraAPI.takePicture();
	ok(actual == expected, 'When a picture is taken, it should be shown in the image area.');
});

 module("GoogleMapsAPI");
 
 test("Maps sanity check", function(){
	 ok(GoogleMapsAPI, 'maps api should be loaded');
});
 
 test( "Google Maps 3rd party API sanity check", function() {
	 var mapId = 'mapArea';
	 
	 $('#qunit').prepend('<div id='+mapId+'></div>');

	 var latitude = -34.397;
	 var longitude = 150.644;
	 
	 
	 var map = GoogleMapsAPI.showLocationOnMap(mapId, latitude, longitude);
	
	 ok(typeof map == 'object', 'showLocationOnMap should return a map object.');
});
 
 module("Geolocation");
 
 function createMock(lat, long){
	 return {
			 getCurrentPosition : function(onSucc, onFail) {
				 onSucc(
					 {coords : {latitude: lat, longitude: long}}
				 );
			 }
	 };
 }
 
 test("Geolocation sanity check", function(){
	 ok(LocatorAPI, 'geolocator api should be loaded');
 });
 
test("Get coordinates mocked", function(){
	 var lat = 123;
	 var long = 321; 
	
	var geolocatorMock = createMock(lat, long);
	
	 LocatorAPI.initialize(geolocatorMock);
	 
	 ok(LocatorAPI.getCurrentCoordinates().latitude == lat, "geolocation should return a lat");
	 ok(LocatorAPI.getCurrentCoordinates().longitude == long, "geolocation should return a long");
 });

 test("Get coordinates no mock - test only works in geolocation enabled browser", function(){
 	LocatorAPI.initialize(navigator.geolocation);
 	ok(LocatorAPI.getCurrentCoordinates().latitude, "geolocation should return a lat");
 	ok(LocatorAPI.getCurrentCoordinates().longitude, "geolocation should return a long");
 });
 
 test("Geolocation injection of persistence", function(){
	 LocatorAPI.initialize(createMock(1,1), function(){
		 return {latitude: 1, longitude: 1};
	 });
	 
	 ok(LocatorAPI.getParkedCoordinates().latitude == 1, 'dependency injection of the persistence layer into location API works');
 });

 module("html5 local storage");
 test("get/set works as expected", function(){
	 var unique = new Date().getTime();

	 PersistenceAPI.set(unique, unique);
	 var actual = PersistenceAPI.get(unique);
	 ok(unique == actual, 'html5 localstorage works');
	 
	 localStorage.removeItem(unique); //clean up local storage
	});
 
module("Persistence API");
test("save and load current coordinates", function(){
	PersistenceAPI.saveParkedCoordinates({latitude: 654, longitude: 123});
	var coords = PersistenceAPI.getParkedCoordinates();
	 ok(coords.latitude = 654, 'saving and reading parked coordinates works');
});

test("save and load current picture", function(){
	var expected="this/is/a/URI";
	PersistenceAPI.saveImageLocation(expected);
	var actual = PersistenceAPI.getImageLocation();
	
	ok(actual == expected, 'saving and reading image URI works');
});

test("load when no coordinates are available", function(){
	localStorage.clear();
	try {
		var coords = PersistenceAPI.getParkedCoordinates();
		ok(false, "exception should have been thrown");
	} catch(e){
		ok(true, "exception was expected."+e);
	}
});

