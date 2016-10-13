var globalConfigs = require('./globalconfigs.js');
var Play = require("./gamestates/play/play.js");
var Menu = require("./gamestates/menu/menu.js");

var PRE2 = new Phaser.Game(
    globalConfigs.WIDTH, 
    globalConfigs.HEIGHT, 
    globalConfigs.AUTO, 
    globalConfigs.DOM_ELEMENT
);

PRE2.state.add('Menu', Menu);
PRE2.state.add('Play', Play);

PRE2.state.start('Menu', true, true, { 
    initialConfig: 'some initial state'
});