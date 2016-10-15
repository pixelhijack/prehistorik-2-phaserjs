var ExtendedSprite = require('../extendedsprite.js');

function Dino(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Dino.prototype = Object.create(ExtendedSprite.prototype);
Dino.prototype.constructor = Dino;

module.exports = Dino;
