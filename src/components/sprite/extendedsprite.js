import modifyState from './behaviours/state.js';
import listen from './behaviours/listen.js';
import debug from './behaviours/debug.js';

/*
    @ExtendedSprite
*/
function ExtendedSprite(game, x, y, sprite, props){
    
    this.game = game;
    this.props = props || { animations: [] };
    
    Phaser.Sprite.call(this, game, x, y, sprite);
    
    this.props.animations.forEach(animation => {
        this.animations.add(
            animation.name, 
            animation.frames.map(frame => frame.toString()), 
            animation.fps, 
            animation.loop
        );
    });

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
    this.anchor.setTo(0.5, 1);
    this.body.collideWorldBounds = true;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this._debugText = this.addChild(this.game.add.text(20, -20, 'debug', { font: "12px Courier", fill: "#ffffff" }));
    this._debugText.visible = false;
}

ExtendedSprite.prototype = Object.create(Phaser.Sprite.prototype);
ExtendedSprite.prototype.constructor = ExtendedSprite;

ExtendedSprite.prototype = Object.assign(
    ExtendedSprite.prototype, 
    modifyState,
    listen,
    debug
);


ExtendedSprite.prototype.update = function(){
    this.animations.play(this.getState());
};

/*
    facing right: this.scale.x = 1
    facing left: this.scale.x = -1
*/
Object.defineProperty(ExtendedSprite.prototype, 'facingRight', {
    get() { 
        return this.scale.x > 0; 
    }
});

Object.defineProperty(ExtendedSprite.prototype, 'facingLeft', {
    get() { 
        return this.scale.x < 0; 
    }
});

export default ExtendedSprite;
