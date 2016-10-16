var AI = require('../ai.js');

function Bat(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Bat.prototype = Object.create(AI.prototype);
Bat.prototype.constructor = Bat;

module.exports = Bat;
