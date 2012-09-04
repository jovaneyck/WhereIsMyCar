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
	  //Muggenberglei: (51.208332, 4.457209)
	  console.log('self:'+self);
	  var map = new GoogleMapsAPI().showLocationOnMap('mapArea', 51.208332, 4.457209); 
  },
  
  this.drawPhoto = function(){
	  //TODO: implement
  },
  
  this.bindEvents = function(){

	  var self = this;
	  
	  $('#recenterButton').live("click", function(event){
		  event.preventDefault();
		  self.drawMap()
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