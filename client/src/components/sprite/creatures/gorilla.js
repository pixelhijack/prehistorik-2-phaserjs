var ExtendedSprite = require('../extendedsprite.js');

function Gorilla(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Gorilla.prototype = Object.create(ExtendedSprite.prototype);
Gorilla.prototype.constructor = Gorilla;

module.exports = Gorilla;
