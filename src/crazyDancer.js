var CrazyDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.setBorderSize();
};

CrazyDancer.prototype = Object.create(BlinkyDancer.prototype);

CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.setBorderSize = function(){
  var randomBorderSize = Math.floor(Math.random() * 25 + 5) + 'px';
  this.$node.animate({
    borderWidth: randomBorderSize,
    border: 'red'
    // backgroundColor: 
  }, 1000);
};

CrazyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.setBorderSize();
};


