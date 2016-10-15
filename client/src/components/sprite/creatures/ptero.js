var ExtendedSprite = require('../extendedsprite.js');

function Ptero(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Ptero.prototype = Object.create(ExtendedSprite.prototype);
Ptero.prototype.constructor = Ptero;

module.exports = Ptero;
