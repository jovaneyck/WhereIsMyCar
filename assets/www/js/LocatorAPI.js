/**
 * Has knowledge of the user's current and previously parked location.
 */
var LocatorAPI = (function(){ 
	
	//private
	var latitude;
	var longitude;
	var locatorDone = false;
	var getPreviouslyParkedCoordinates;
	
	function init(locator){
		try {
			  if (typeof locator === 'undefined')
				  throw "Could not find any support for geolocation on your device.";
			  
			  function onSuccess(position){
				  latitude = position.coords.latitude;
				  longitude = position.coords.longitude;
				  locatorDone = true;
			  };
			  
			  function onFail(positionError){
				  locatorDone = false;
				  console.log("geolocation is enabled, but something went wrong: "+positionError.message);
			  }
			  
			  locator.getCurrentPosition(onSuccess, onFail);
		} catch(e) {
			console.log(e);
		}
	};
	
	//Public API
	return {
		/**
		 * Returns the user's current coordinates
		 */
		  getCurrentCoordinates : function(){
			 if(! locatorDone)
				 console.log("geolocation failed or not yet ready");
			 return {latitude: latitude, longitude: longitude};
		  },
		  
		/**
		 * Returns previously parked coordinates
		 */
		  getParkedCoordinates : function(){
			 return getPreviouslyParkedCoordinates();
		  },
		  
		  initialize : function(locator, getParkedCoords){
			  init(locator);
			  getPreviouslyParkedCoordinates = getParkedCoords;
		  }
		  
		  
	};
})();