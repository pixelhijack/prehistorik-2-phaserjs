var ExtendedSprite = require('../extendedsprite.js');

function Bug(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Bug.prototype = Object.create(ExtendedSprite.prototype);
Bug.prototype.constructor = Bug;

module.exports = Bug;
