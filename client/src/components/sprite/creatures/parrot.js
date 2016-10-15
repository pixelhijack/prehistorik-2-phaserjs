var ExtendedSprite = require('../extendedsprite.js');

function Parrot(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Parrot.prototype = Object.create(ExtendedSprite.prototype);
Parrot.prototype.constructor = Parrot;

module.exports = Parrot;
