// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
};


Dancer.prototype = {
  
  step : function(){
    var that = this;
    setTimeout(function(){that.step();}, this.timeBetweenSteps);
  },

  setPosition : function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  } 
};
