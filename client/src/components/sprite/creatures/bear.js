var ExtendedSprite = require('../extendedsprite.js');

function Bear(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Bear.prototype = Object.create(ExtendedSprite.prototype);
Bear.prototype.constructor = Bear;

module.exports = Bear;
