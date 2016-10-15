var ExtendedSprite = require('../extendedsprite.js');

function Spider(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Spider.prototype = Object.create(ExtendedSprite.prototype);
Spider.prototype.constructor = Spider;

module.exports = Spider;
