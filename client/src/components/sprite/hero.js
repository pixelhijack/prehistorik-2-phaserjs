var ExtendedSprite = require('./extendedsprite.js');
var listenMixin = require('./mixins/listen.js');

/*
    @Hero
*/
function Hero(game, x, y, sprite, props){
    ExtendedSprite.call(this, game, x, y, sprite, props);
}

Hero.prototype = Object.create(ExtendedSprite.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype = Object.assign(Hero.prototype, listenMixin);

module.exports = Hero;