var CameraAPI = (function(){
	var takePictureFunction;
	var saveImageLocationFunction;
	var onPictureSuccessFunction;
	
	//Public API
  return {
	  /**
	   * Initialize the Camera API with a picture provider (be it Cordova API or native html5, ...)
	   */
	  initialize : function(takePicFunction, savePicFunction, onPictureSuccess){
		  takePictureFunction = takePicFunction;
		  saveImageLocationFunction = savePicFunction;
		  onPictureSuccessFunction = onPictureSuccess;
	  } ,
	  takePicture : function(){		    
			function onSuccess(imageURI) {
				console.log("picture succesfully taken, saving...");
			    saveImageLocationFunction(imageURI);
			    onPictureSuccessFunction();
			};
		
			function onFail(message) {
			    console.log('Oops! Taking picture failed: ' + message);
			};
			
			takePictureFunction(onSuccess, onFail); 
	  }
  };
})();