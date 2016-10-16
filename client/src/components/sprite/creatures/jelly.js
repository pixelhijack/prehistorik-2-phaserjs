var AI = require('../ai.js');

function Jelly(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Jelly.prototype = Object.create(AI.prototype);
Jelly.prototype.constructor = Jelly;

module.exports = Jelly;
