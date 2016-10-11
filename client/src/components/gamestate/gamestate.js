function GameState(){
    this.keys;
}

GameState.prototype.init = function(configs){
    console.log('[PHASER] INIT - to be overrided', configs);
};

GameState.prototype.preload = function(){
    console.log('[PHASER] PRELOAD - to be overrided');
};

GameState.prototype.create = function(){
    console.log('[PHASER] CREATE - to be overrided');
};

GameState.prototype.update = function(){
    console.log('[PHASER] UPDATE - to be overrided');
};

module.exports = GameState;