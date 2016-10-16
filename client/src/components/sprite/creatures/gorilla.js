var AI = require('../ai.js');

function Gorilla(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Gorilla.prototype = Object.create(AI.prototype);
Gorilla.prototype.constructor = Gorilla;

module.exports = Gorilla;
