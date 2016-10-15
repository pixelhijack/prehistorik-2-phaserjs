var ExtendedSprite = require('../extendedsprite.js');

function Turtle(game, x, y, sprite, props){
	ExtendedSprite.call(this, game, x, y, sprite, props);
}
Turtle.prototype = Object.create(ExtendedSprite.prototype);
Turtle.prototype.constructor = Turtle;

module.exports = Turtle;

