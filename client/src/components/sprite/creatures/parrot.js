var AI = require('../ai.js');

function Parrot(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Parrot.prototype = Object.create(AI.prototype);
Parrot.prototype.constructor = Parrot;

module.exports = Parrot;
