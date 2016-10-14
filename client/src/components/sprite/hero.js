var ExtendedSprite = require('./extendedsprite.js');
var listen = require('./behaviours/listen.js');
var jump = require('./behaviours/jump.js');
var run = require('./behaviours/run.js');

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
    run
);

module.exports = Hero;