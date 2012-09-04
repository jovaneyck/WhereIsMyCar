function WhereIsMyCarController() {
  
  this.initialize = function(){
	  this.bindEvents();
	  this.drawCanvas();
	  console.log("WhereIsMyCar initialized succesfully!");
  },
  
  this.drawCanvas = function(){
	  var height = window.innerHeight;
	  var width = window.innerWidth; 
	  var heightScaleFactor = 0.5;
	  var widthScaleFactor = 0.9;
	  
	  $('#canvas').height(height*heightScaleFactor);
	  $('#canvas').width(width*widthScaleFactor);
	  
	  $('#previouslyParkedPage').live("pagecreate", this.drawMap);
	  this.drawPhoto();
  },
  
  this.drawMap = function(){
	  var mapsAPI = new GoogleMapsAPI();
	  //Muggenberglei: (51.208332, 4.457209)
	  var map = mapsAPI.showLocationOnMap('mapArea', 51.208332, 4.457209); 
  },
  
  this.drawPhoto = function(){
	  //TODO: implement
  },
  
  this.bindEvents = function(){
	  $('#recenterButton').live("click", function(event){
		  event.preventDefault();
		  new WhereIsMyCarController().drawMap(); //<this> does not work :(
	  });  
	  
	  $('#justParkedButton').live("click", function(event){
		  event.preventDefault();
		  new CameraAPI().takePicture(); 
		  $('#previouslyParkedButton').click();
	  });  
	  
	  $('#photoArea').live("click", function(event){
		  event.preventDefault();
		 // console.log(this.cameraAPI.imageURI)
		  
	  }); 
	  
	  
  }
}