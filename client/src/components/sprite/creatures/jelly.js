var ExtendedSprite = require('../extendedsprite.js');

function Jelly(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Jelly.prototype = Object.create(ExtendedSprite.prototype);
Jelly.prototype.constructor = Jelly;

module.exports = Jelly;
