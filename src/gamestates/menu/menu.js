import GameState from '../../components/gamestate/gamestate.js';
import create from './create.js';

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
    preload: preload,
    create: create,
    update: update
};

function preload () {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
};

function update () {
    // fps 
    this.game.debug.text(this.game.time.fps, 5, 20);
}

module.exports = Menu;
