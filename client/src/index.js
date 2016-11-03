import globalConfig from './globalconfig.js';
import Menu from './gamestates/menu/menu.js';
import Play from './gamestates/play/play.js';
import GameOver from './gamestates/gameover/gameover.js';

// instantiate a Phaser.Game
const PRE2 = new Phaser.Game(
    globalConfig.width, 
    globalConfig.height, 
    Phaser.AUTO, 
    globalConfig.domElement
);

// register gamestates (will be instantiated w/ this.game as 1st param, pass globalConfig as 2nd)
PRE2.state.add('Menu', Menu.bind(null, globalConfig));
PRE2.state.add('Play', Play.bind(null, globalConfig));
PRE2.state.add('GameOver', GameOver.bind(null, globalConfig));

// kick off first gamestate: Menu
PRE2.state.start('Menu', true, true, { 
    initialConfig: 'some initial state'
});