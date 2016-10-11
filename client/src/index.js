var GameState = require('./components/gamestate/gamestate.js');

var configs = {
    WIDTH: 1000,
    HEIGHT: 1000,
    DOM_ELEMENT: 'app'
};

GameState.prototype.update = function(){
    console.log('[PHASER] UPDATE lifecycle method overriden');
};

var game = new Phaser.Game(configs.WIDTH, configs.HEIGHT, Phaser.AUTO, configs.DOM_ELEMENT);

game.state.add('Game', GameState);

game.state.start('Game', true, true, { 
    initialConfig: 'some initial state'
});