var AI = require('../ai.js');

function Spider(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Spider.prototype = Object.create(AI.prototype);
Spider.prototype.constructor = Spider;

module.exports = Spider;
