// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
};


Dancer.prototype = {
  $node : $('<span class="dancer"></span>'),
  
  step : function(){
    var that = this;
    setTimeout(function(){that.step}, this.timeBetweenSteps);
  },

  setPosition : function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  } 
};

var makeDancer = function(top, left, timeBetweenSteps){
  return new Dancer(top, left, timeBetweenSteps);
};