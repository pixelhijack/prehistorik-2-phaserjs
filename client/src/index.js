var globalConfigs = require('./globalconfigs.js');
var Play = require("./gamestates/play/play.js");
var Menu = require("./gamestates/menu/menu.js");

var game = new Phaser.Game(
    globalConfigs.WIDTH, 
    globalConfigs.HEIGHT, 
    globalConfigs.AUTO, 
    globalConfigs.DOM_ELEMENT
);

game.state.add('Menu', Menu);
game.state.add('Play', Play);

game.state.start('Menu', true, true, { 
    initialConfig: 'some initial state'
});