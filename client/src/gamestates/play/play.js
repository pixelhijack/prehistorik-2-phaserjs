var GameState = require('../../components/gamestate/gamestate.js');
var init = require('./init.js');
var preload = require('./preload.js');
var create = require('./create.js');
var update = require('./update.js');

/*
    @Play
    inherits from GameState component
*/
function Play(){
    GameState.call(this);    
}
Play.prototype = Object.create(GameState.prototype);
Play.prototype.constructor = Play;

/*
    @override 
*/
Play.prototype = {
    init: init,
    preload: preload,
    create: create,
    update: update
};

module.exports = Play;
