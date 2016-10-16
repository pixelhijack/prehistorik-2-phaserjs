var AI = require('../ai.js');

function Bear(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Bear.prototype = Object.create(AI.prototype);
Bear.prototype.constructor = Bear;

module.exports = Bear;
