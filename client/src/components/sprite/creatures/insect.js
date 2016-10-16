var AI = require('../ai.js');

function Insect(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Insect.prototype = Object.create(AI.prototype);
Insect.prototype.constructor = Insect;

module.exports = Insect;
