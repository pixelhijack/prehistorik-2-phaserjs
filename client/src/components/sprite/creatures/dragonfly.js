var AI = require('../ai.js');

function Dragonfly(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Dragonfly.prototype = Object.create(AI.prototype);
Dragonfly.prototype.constructor = Dragonfly;

module.exports = Dragonfly;
