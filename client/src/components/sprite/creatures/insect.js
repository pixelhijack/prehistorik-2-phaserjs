var ExtendedSprite = require('../extendedsprite.js');

function Insect(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Insect.prototype = Object.create(ExtendedSprite.prototype);
Insect.prototype.constructor = Insect;

module.exports = Insect;
