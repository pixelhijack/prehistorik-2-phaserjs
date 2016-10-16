var AI = require('../ai.js');

function Ptero(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Ptero.prototype = Object.create(AI.prototype);
Ptero.prototype.constructor = Ptero;

module.exports = Ptero;
