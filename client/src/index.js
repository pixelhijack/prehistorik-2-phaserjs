var configs = {
    WIDTH: 1000,
    HEIGHT: 1000,
    DOM_ELEMENT: 'app'
};

var game = new Phaser.Game(configs.WIDTH, configs.HEIGHT, Phaser.AUTO, configs.DOM_ELEMENT);

game.state.add('Game', Game);

game.state.start('Game', true, true, { 
    initialConfig: 'some initial state'
});

function Game(){
    
    this.init = function(config){
        console.log('[PHASER] init', config);
    };
    this.preload = function(){
        console.log('[PHASER] preload');
    };
    this.create = function(){
        console.log('[PHASER] create');
    };
    this.update = function(){
        console.log('[PHASER] update');
    };
}