// Creates and returns a new dancer object that can step
var Dancer = function(bottom, left, timeBetweenSteps){
  this.bottom = bottom;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(bottom, left);
  this.step();
};


Dancer.prototype = {
  
  step : function(){
    var that = this;
    setTimeout(function(){that.step();}, this.timeBetweenSteps);
  },

  setPosition : function(bottom, left){
    var styleSettings = {
      bottom: bottom,
      left: left
    };
    this.$node.css(styleSettings);
  } 
};
