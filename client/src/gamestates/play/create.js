var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;
    
    this.keys = this.game.input.keyboard.createCursorKeys();
    this.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    console.log('[PHASER][Play][Create]');
};

module.exports = create;