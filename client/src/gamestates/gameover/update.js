var update = function(){
    
    // fps 
    this.game.debug.text(this.game.time.fps, 5, 20);
    
    console.log('[PHASER][GameOver][Update]');
};

module.exports = update;