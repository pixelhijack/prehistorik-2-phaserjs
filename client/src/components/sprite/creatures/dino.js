var AI = require('../ai.js');

function Dino(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Dino.prototype = Object.create(AI.prototype);
Dino.prototype.constructor = Dino;

module.exports = Dino;
