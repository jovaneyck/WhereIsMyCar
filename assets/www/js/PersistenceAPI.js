/**
 * API encapsulating all application persistence.
 */
var PersistenceAPI = (function(){ 
	//Private
	var rootKey = "whereismycar.previouslyparked";
	var latKey = rootKey+".lat";
	var longKey = rootKey+".long";
	var imgKey = rootKey+".imgURI";
	
	
	//Public API
	return {
		/**
		 * Gets a value from local storage
		 */
		get : function(key){
			valueFromStorage =  localStorage.getItem(key);
			
			if(valueFromStorage == null)
				throw "key: <"+key+"> was not found in local storage!";
			
			return valueFromStorage;
		},
		set : function(key, value){
			localStorage.setItem(key, value);
		},
		/**
		 * Returns the user's previously parked coordinates
		 */
		  getParkedCoordinates : function(){
			var lat = parseFloat(PersistenceAPI.get(latKey));
			var long = parseFloat(PersistenceAPI.get(longKey));
			
			return {latitude: lat, longitude: long};
		  },
		  
		/**
		 * Saves the user's newly parked coordinates
		 */
		  saveParkedCoordinates : function(coordinates){
			  PersistenceAPI.set(latKey, coordinates.latitude);
			  PersistenceAPI.set(longKey, coordinates.longitude);
		  },  
		  
		  getImageLocation : function(){
			 return PersistenceAPI.get(imgKey);
		  },
		  
		  saveImageLocation : function(imgURI){
			  console.log("saving image location: "+imgKey+" => "+imgURI);
			  PersistenceAPI.set(imgKey, imgURI);
		  }
	};
})();