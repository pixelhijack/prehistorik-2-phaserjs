var ExtendedSprite = require('./extendedsprite.js');
var listen = require('./behaviours/listen.js');
var jump = require('./behaviours/jump.js');
var stop = require('./behaviours/stop.js');
var move = require('./behaviours/move.js');
var state = require('./behaviours/state.js');

/*
    @Hero
*/
function Hero(game, x, y, sprite, props){
    ExtendedSprite.call(this, game, x, y, sprite, props);
}

Hero.prototype = Object.create(ExtendedSprite.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype = Object.assign(
    Hero.prototype, 
    listen, 
    jump,
    stop,
    move,
    state
);

ExtendedSprite.prototype.update = function(){
    this.animations.play(this.getState());
};

module.exports = Hero;