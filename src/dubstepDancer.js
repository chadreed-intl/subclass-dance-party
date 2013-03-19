var DubstepDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
};

DubstepDancer.prototype = Object.create(BlinkyDancer.prototype);
DubstepDancer.prototype.constructor = DubstepDancer;
 

DubstepDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  
  this.$node.animate({
    opacity:0.25,
    left: '+=50'
  }, 3000);
    
};

