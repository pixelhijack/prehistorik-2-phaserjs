var ExtendedSprite = require('../extendedsprite.js');

function Frog(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Frog.prototype = Object.create(ExtendedSprite.prototype);
Frog.prototype.constructor = Frog;

module.exports = Frog;
