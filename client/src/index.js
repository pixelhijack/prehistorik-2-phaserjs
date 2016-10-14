var globalConfig = require('./globalconfig.js');
var Menu = require('./gamestates/menu/menu.js');
var Play = require('./gamestates/play/play.js');

// instantiate a Phaser.Game
var PRE2 = new Phaser.Game(
    globalConfig.width, 
    globalConfig.height, 
    Phaser.AUTO, 
    globalConfig.domElement
);

// register gamestates (will be instantiated w/ this.game as 1st param, pass globalConfig as 2nd)
PRE2.state.add('Menu', Menu.bind(null, globalConfig));
PRE2.state.add('Play', Play.bind(null, globalConfig));

// kick off first gamestate: Menu
PRE2.state.start('Menu', true, true, { 
    initialConfig: 'some initial state'
});