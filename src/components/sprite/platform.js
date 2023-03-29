var Platform = function(game, platformImage, x, y, props){
    Phaser.Sprite.call(this, game, x, y, 'pre2atlas');
    game.physics.enable(this, Phaser.Physics.ARCADE);
    
    this.frameName = platformImage;
    this.props = props;
    
    this.stepped = {
      on: false,
      prev: false
    };
  
    this.props.prevPosition = {
      x: this.x,
      y: this.y,
      dx: 0,
      dy: 0
    };
    
    this.body.gravity.y = 500;
    this.body.immovable = true;
    this.body.moves = false;
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
    
    if(this.props.behaviour === 'shuttle'){
        this.shuttle(
            { 
                x: this.props.moveTo.x,
                y: this.props.moveTo.y 
            },
            { 
                x: this.props.x,
                y: this.props.y 
            }, 
            this.props.moveTo.timeout, 
            Phaser.Easing[this.props.moveTo.easing].InOut
        );
    }
    
    this.update = function(){
      // tweening object doesnt have body.velocity so we have to manually calculate:
      this.props.prevPosition.dx = this.x - this.props.prevPosition.x;
      this.props.prevPosition.dy = this.y - this.props.prevPosition.y;
      this.props.prevPosition.x = this.x;
      this.props.prevPosition.y = this.y;
      
      // one-off step-on step-off 'events' !== onStand
      if(this.stepped.on && !this.stepped.prev){
        this.onSteppedOn();
      }
      if(!this.stepped.on && this.stepped.prev){
        this.onSteppedOff();
      }
    };
  };
  
  Platform.prototype = Object.create(Phaser.Sprite.prototype);
  Platform.prototype.constructor = Platform;
  
  Platform.prototype.onSteppedOn = function onSteppedOn(stander, platform){
    if(this.props.behaviour === 'moveTo'){
      this.props.tween1 = this.moveTo(
            { 
                x: (this.props.moveTo.x || this.x), 
                y: (this.props.moveTo.y || this.y) 
            }, 
            this.props.moveTo.timeout, 
            Phaser.Easing[this.props.moveTo.easing].InOut
        );
    }
    
    if(this.props.behaviour === 'fall'){
      this.game.time.events.add(Phaser.Timer.SECOND * this.props.fallTimeout * 0.001, function(){
        this.fall();
      }, this);
      this.game.time.events.add(Phaser.Timer.SECOND * this.props.restoreTimeout * 0.001, function(){
        this.restore();
      }, this);
    }
  };
  
  Platform.prototype.onSteppedOff = function onSteppedOff(stander, platform){
  
  };
  
  Platform.prototype.onStand = function onStand(stander, platform){
    // corrigation of standing sprite: if not, the platform move out of his feet
    // stander.x = platform.x is not good enough, creates sticky platform
    stander.x += platform.props.prevPosition.dx;
    stander.y += platform.props.prevPosition.dy;
  };
  
  Platform.prototype.fall = function fall(){
    this.immovable = false;
    this.body.moves = true;
    this.allowGravity = true;
  };
  
  Platform.prototype.restore = function restore(){
    this.immovable = true;
    this.body.moves = false;
    this.allowGravity = false;
    this.game.add.tween(this).to({ 
            x: this.props.x, 
            y: this.props.y 
        }, 
        1000, 
        Phaser.Easing.Linear.In
    );
  };
  
  Platform.prototype.moveTo = function moveTo(tweenTo, timeout, easing){
    this.game.add.tween(this).to(tweenTo, timeout, easing);
  };
  
  Platform.prototype.shuttle = function shuttle(tween1, tween2, timeout, easing){
    this.props.tween1 = this.game.add.tween(this).to(tween1, timeout, easing);
    this.props.tween2 = this.game.add.tween(this).to(tween2, timeout, easing);
    
    this.props.tween1.chain(this.props.tween2);
    this.props.tween2.chain(this.props.tween1);
    this.props.tween1.start();
  };
  
  module.exports = Platform;