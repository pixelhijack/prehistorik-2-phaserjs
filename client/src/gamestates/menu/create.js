var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;
    
    // CTA text
    var style = { font: "48px Helvetica", fill: "#ffffff", align: "center" };

    var text = this.game.add.text(
        this.game.world.centerX, 
        this.game.world.centerY, 
        "Press a key to continue", 
        style
    );

    text.anchor.set(0.5);
    
    // set keys
    this.keys = this.game.input.keyboard.createCursorKeys();
    this.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    // load next game state by fetching level configs
    this.game.input.keyboard.onDownCallback = function(event){
        fetch('/level/' + event.key, {
        	method: 'get'
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            this.game.state.start('Play', true, true, json);
        }.bind(this));
    };
    
    console.log('[PHASER][Menu][Create]');
};

module.exports = create;