var state = require('./behaviours/state.js');

/*
    @ExtendedSprite
*/
function ExtendedSprite(game, x, y, sprite, props){
    
    this.game = game;
    this.props = props || { animations: [] };
    
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
    
    this.game.add.existing(this);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.gravity.y = this.props.gravity;
    this.anchor.setTo(0.5, 0.5);
    this.body.collideWorldBounds = true;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
}

ExtendedSprite.prototype = Object.create(Phaser.Sprite.prototype);
ExtendedSprite.prototype.constructor = ExtendedSprite;

ExtendedSprite.prototype = Object.assign(
    ExtendedSprite.prototype, 
    state
);

ExtendedSprite.prototype.update = function(){
    this.animations.play(this.getState());
};

module.exports = ExtendedSprite;