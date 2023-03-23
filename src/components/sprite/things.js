var Thing = function(game, frameName, x, y, configs){
    Phaser.Sprite.call(this, game, x, y, 'pre2atlas');
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.frameName = frameName;
    
    var pulseDistance = 10 + Math.random() * 5 - Math.random() * 5;
    this.props = {
      x: x,
      y: y,
      pulseDistance: pulseDistance,
      pulseVelocity: pulseDistance * 3
    };
    this.body.gravity.y = 100;
    this.allowGravity = true;
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
    
    this.update = function(){
      this.pulse();
    };
  };
  
  Thing.prototype = Object.create(Phaser.Sprite.prototype);
  Thing.prototype.constructor = Thing;
  
  Thing.prototype.pulse = function pulse(){
    if(this.y >= this.props.y + this.props.pulseDistance){
      this.body.velocity.y = -this.props.pulseVelocity;
    }
    if(this.y < this.props.y){
      //this.body.velocity.y = 0;
    }
  };
  
  module.exports = Thing;