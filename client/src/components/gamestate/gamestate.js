function GameState(){
    this.keys;
}

GameState.prototype.init = function(configs){
    console.log('[PHASER][Component][Init]', configs);
};

GameState.prototype.preload = function(){
    console.log('[PHASER][Component][Preload]');
};

GameState.prototype.create = function(){
    console.log('[PHASER][Component][Create]');
};

GameState.prototype.update = function(){
    console.log('[PHASER][Component][Update]');
};

module.exports = GameState;