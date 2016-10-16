var AI = require('../ai.js');

function Native(game, x, y, sprite, props){
	AI.call(this, game, x, y, sprite, props);
}
Native.prototype = Object.create(AI.prototype);
Native.prototype.constructor = Native;

module.exports = Native;
