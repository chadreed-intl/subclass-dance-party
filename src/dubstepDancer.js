var DubstepDancer = function(bottom, left, timeBetweenSteps){
  BlinkyDancer.call(this, bottom, left, timeBetweenSteps);
};

DubstepDancer.prototype = Object.create(BlinkyDancer.prototype);
DubstepDancer.prototype.constructor = DubstepDancer;
 

DubstepDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  
  this.$node.animate({
    backgroundSize: '160px',
    left: '+=150',
  }, 3000);
    
};

