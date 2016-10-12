var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;
    
    var style = { font: "48px Helvetica", fill: "#ffffff", align: "center" };

    var text = this.game.add.text(
        this.game.world.centerX, 
        this.game.world.centerY, 
        "Press a key to continue", 
        style
    );

    text.anchor.set(0.5);
    
    this.keys = this.game.input.keyboard.createCursorKeys();
    this.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    console.log('[PHASER][Menu][Create]');
};

module.exports = create;