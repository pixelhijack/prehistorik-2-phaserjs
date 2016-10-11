var GameState = require('./components/gamestate/gamestate.js');
var init = require('./init.js');
var preload = require('./preload.js');
var create = require('./create.js');
var update = require('./update.js');

var globalConfigs = require('./globalconfigs.js');

GameState.prototype = {
    init: init,
    preload: preload,
    create: create,
    update: update
};

var game = new Phaser.Game(
    globalConfigs.WIDTH, 
    globalConfigs.HEIGHT, 
    globalConfigs.AUTO, 
    globalConfigs.DOM_ELEMENT
);

game.state.add('Game', GameState);

game.state.start('Game', true, true, { 
    initialConfig: 'some initial state'
});