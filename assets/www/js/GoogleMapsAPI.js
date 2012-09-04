function GoogleMapsAPI() {
  
/**
 * Shows a google map focused on <latitude>,<longitude>. The map is displayed in the element #<elementName>.
 */
  this.showLocationOnMap = function(elementName, latitude, longitude){

	  var LatLng = new google.maps.LatLng(latitude, longitude)
	  
	  var mapOptions = {
			  center: LatLng,
			  zoom: 16,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
	  };
	  
	  var map = new google.maps.Map(document.getElementById(elementName), mapOptions);
	  
	  var marker = new google.maps.Marker(
			  {
				  position: LatLng,
				  map: map,
				  visible: true
			  }
	  );
	  
	  console.log('marker:'+marker);
	  
	  return map;
  }
	
}