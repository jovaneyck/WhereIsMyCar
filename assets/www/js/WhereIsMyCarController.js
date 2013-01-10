var WhereIsMyCarController = (function(){ 
	//TODO: offline capability? no gps coords => no map, but picture!!
	//Module internals
	  drawCanvas = function(){
		  var height = window.innerHeight;
		  var width = window.innerWidth; 
		  var heightScaleFactor = 0.5;
		  var widthScaleFactor = 0.9;
		  
		  $('#canvas').height(height*heightScaleFactor);
		  $('#canvas').width(width*widthScaleFactor);
		  
		  drawMap();
		  drawPhoto();
	  };
	
	  drawMap = function(){
		  var coords;
		  
		  try{
			  coords = LocatorAPI.getParkedCoordinates();
		  }
		  catch(e){
			  coords = LocatorAPI.getCurrentCoordinates();
			  console.log("no coordinates were found in local storage, defaulting to the user's current location.");
		  }
		  var map = GoogleMapsAPI.showLocationOnMap('mapArea', coords.latitude, coords.longitude); 
	  };
	  
	  drawPhoto = function(){
		  var imageURI;
		  
		  try{
			  imageURI = PersistenceAPI.getImageLocation();
			  $('#myImage').attr('src',imageURI);
			  $('#popupIMG').attr('src', imageURI);
		  } catch (notFoundException){
			  alert('Touch "I just parked" to take a picture of your car and save your location.');
			  console.log("No previous image was found: "+notFoundException);
		  }  
	  };
	  
	  bindEvents = function(){
		  
		  $('#recenterButton').live("click", function(event){
			  drawMap();
		  });  
		  
		  $('#justParkedButton').live("click", function(event){
			  CameraAPI.takePicture(); //Cordova handles success in a callback, wait for draw there.

			  var coords = LocatorAPI.getCurrentCoordinates();
			  PersistenceAPI.saveParkedCoordinates(coords);
		  });  
		  
		  $('#photoArea').live("click", function(event){
			  console.log("popup window triggering");
		  }); 	 
	  };
	
	//Public API
	return {
		 initialize : function(){			 
			 bindEvents();
			 drawCanvas();
		  },
		  
		  refreshUI : function(){
			  drawCanvas();
		  }
	};
})();