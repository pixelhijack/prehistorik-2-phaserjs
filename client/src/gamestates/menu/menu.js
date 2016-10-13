var GameState = require('../../components/gamestate/gamestate.js');
var create = require('./create.js');
var update = require('./update.js');

/*
    @Menu
    inherits from GameState component
*/
function Menu(globalConfig){
    GameState.call(this);
    this.globalConfig = globalConfig;
}
Menu.prototype = Object.create(GameState.prototype);
Menu.prototype.constructor = Menu;

/*
    @override 
*/
Menu.prototype = {
    create: create,
    update: update
};

module.exports = Menu;
