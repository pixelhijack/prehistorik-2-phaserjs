var GameState = require('../../components/gamestate/gamestate.js');
var create = require('./create.js');
var update = require('./update.js');

/*
    @GameOver
    inherits from GameState component
*/
function GameOver(globalConfig){
    GameState.call(this);
    this.globalConfig = globalConfig;
}
GameOver.prototype = Object.create(GameState.prototype);
GameOver.prototype.constructor = GameOver;

/*
    @override 
*/
GameOver.prototype = {
    create: create,
    update: update
};

module.exports = GameOver;
