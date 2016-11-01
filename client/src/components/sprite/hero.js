var ExtendedSprite = require('./extendedsprite.js');
var listen = require('./behaviours/listen.js');
var jump = require('./behaviours/jump.js');
var stop = require('./behaviours/stop.js');
var move = require('./behaviours/move.js');
var hurt = require('./behaviours/hurt.js');
var hit = require('./behaviours/hit.js');

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
    hurt,
    hit
);

module.exports = Hero;