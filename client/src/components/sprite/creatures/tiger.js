var AI = require('../ai.js');

function Tiger(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Tiger.prototype = Object.create(AI.prototype);
Tiger.prototype.constructor = Tiger;

module.exports = Tiger;
