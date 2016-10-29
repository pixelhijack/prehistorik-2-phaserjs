var modifyState = require('./behaviours/state.js');

/*
    @ExtendedSprite
*/
function ExtendedSprite(game, x, y, sprite, props){
    
    this.game = game;
    this.props = props || { animations: [] };
    
    this.id = this.constructor.name + '-' + x + '-' + y;
    
    Phaser.Sprite.call(this, game, x, y, sprite);
    
    this.props.animations.forEach(function(animation){
        this.animations.add(
            animation.name, 
            animation.frames.map(function(frame){ 
                return frame.toString(); 
            }), 
            animation.fps, 
            animation.loop
        );
    }.bind(this));
    
    this.state = {
        'die': 0,
        'hurt': 0,
        'hit': 0,
        'move': 0,
        'idle': Infinity
    };
    
    this.game.add.existing(this);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.gravity.y = this.props.gravity;
    this.anchor.setTo(0.5, 0.5);
    this.body.collideWorldBounds = true;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this._debugText = this.addChild(this.game.add.text(20, -20, 'debug', { font: "12px Arial", fill: "#ffffff" }));
    this._debugText.visible = false;
}

ExtendedSprite.prototype = Object.create(Phaser.Sprite.prototype);
ExtendedSprite.prototype.constructor = ExtendedSprite;

ExtendedSprite.prototype = Object.assign(
    ExtendedSprite.prototype, 
    modifyState
);

Object.defineProperty(ExtendedSprite.prototype, 'facingRight', {
    get: function() { 
        return this.scale.x > 0; 
    }
});

Object.defineProperty(ExtendedSprite.prototype, 'facingLeft', {
    get: function() { 
        return this.scale.x < 0; 
    }
});

ExtendedSprite.prototype.update = function(){
    this.animations.play(this.getState());
};

ExtendedSprite.prototype.debug = function debug(toDebug){
  this._debugText.visible = true;
  this._debugText.scale.x = this.scale.x;
  this._debugText.setText(toDebug || '');
};

module.exports = ExtendedSprite;