var AI = require('../ai.js');

function Frog(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Frog.prototype = Object.create(AI.prototype);
Frog.prototype.constructor = Frog;

module.exports = Frog;
