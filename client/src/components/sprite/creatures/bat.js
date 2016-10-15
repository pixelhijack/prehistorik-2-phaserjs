var ExtendedSprite = require('../extendedsprite.js');

function Bat(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Bat.prototype = Object.create(ExtendedSprite.prototype);
Bat.prototype.constructor = Bat;

module.exports = Bat;
