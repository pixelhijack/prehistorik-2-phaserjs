var AI = require('../ai.js');

function Turtle(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Turtle.prototype = Object.create(AI.prototype);
Turtle.prototype.constructor = Turtle;

module.exports = Turtle;

