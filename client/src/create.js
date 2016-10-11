var create = function(){
    
    this.keys = this.game.input.keyboard.createCursorKeys();
    this.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    console.log('[PHASER] CREATE lifecycle method extracted');
};

module.exports = create;