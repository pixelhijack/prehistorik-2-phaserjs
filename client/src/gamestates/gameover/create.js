var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;

    // CTA text
    var text = this.game.add.text(
        this.game.world.centerX, 
        this.game.world.centerY, 
        "Game Over\nPress a key to continue", 
        { font: "48px Helvetica", fill: "#ffffff", align: "center" }
    );

    text.anchor.set(0.5);
    
    // load next game state by fetching level configs
    this.game.input.keyboard.onDownCallback = function(event){
        this.game.state.start('Menu', true, true);
    };
    
    console.log('[PHASER][GameOver][Create]');
};

module.exports = create;