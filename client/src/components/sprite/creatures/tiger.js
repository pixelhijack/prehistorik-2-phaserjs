var ExtendedSprite = require('../extendedsprite.js');

function Tiger(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Tiger.prototype = Object.create(ExtendedSprite.prototype);
Tiger.prototype.constructor = Tiger;

module.exports = Tiger;
