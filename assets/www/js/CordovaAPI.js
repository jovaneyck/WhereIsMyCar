/**
 * Wraps all Cordova-specific code. 
 * Functions in here can be replaced by html5-native funciontality when it comes available in mobile browsers.
 */
var CordovaAPI = (function(){
	
	//Public API
  return {
	  takePicture : function(onSuccess, onFail){			
			navigator.camera.getPicture(onSuccess, onFail, { quality: 100, destinationType: Camera.DestinationType.FILE_URI }); 
	  }
  };
})();