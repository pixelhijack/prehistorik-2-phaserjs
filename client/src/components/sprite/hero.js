var ExtendedSprite = require('./extendedsprite.js');
var listenBehaviour = require('./behaviours/listen.js');
var jumpBehaviour = require('./behaviours/jump.js');

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
    listenBehaviour, 
    jumpBehaviour
);

module.exports = Hero;