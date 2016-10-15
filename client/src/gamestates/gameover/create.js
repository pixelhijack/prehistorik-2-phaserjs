var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;

    // CTA text
    var text = this.game.add.text(
        this.globalConfig.width / 2, 
        this.globalConfig.height / 2, 
        "Game Over\nPress space to continue", 
        { font: "48px Helvetica", fill: "#ffffff", align: "center" }
    );

    text.anchor.set(0.5);
    
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.addOnce(function(){
        this.game.state.start('Menu', true, true);
    }, this);
    
    console.log('[PHASER][GameOver][Create]');
};

module.exports = create;