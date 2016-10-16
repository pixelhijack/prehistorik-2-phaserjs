var AI = require('../ai.js');

function Bug(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Bug.prototype = Object.create(AI.prototype);
Bug.prototype.constructor = Bug;

module.exports = Bug;
