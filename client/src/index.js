var globalConfigs = require('./globalconfigs.js');
var Play = require("./gamestates/play/play.js");

var game = new Phaser.Game(
    globalConfigs.WIDTH, 
    globalConfigs.HEIGHT, 
    globalConfigs.AUTO, 
    globalConfigs.DOM_ELEMENT
);

game.state.add('Game', Play);

game.state.start('Game', true, true, { 
    initialConfig: 'some initial state'
});