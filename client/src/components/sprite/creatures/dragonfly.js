var ExtendedSprite = require('../extendedsprite.js');

function Dragonfly(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Dragonfly.prototype = Object.create(ExtendedSprite.prototype);
Dragonfly.prototype.constructor = Dragonfly;

module.exports = Dragonfly;
