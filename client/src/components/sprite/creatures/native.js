var ExtendedSprite = require('../extendedsprite.js');

function Native(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Native.prototype = Object.create(ExtendedSprite.prototype);
Native.prototype.constructor = Native;

module.exports = Native;
