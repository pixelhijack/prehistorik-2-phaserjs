var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;

    // CTA text
    var text = this.game.add.text(
        this.game.world.centerX, 
        this.game.world.centerY, 
        "Press key 1 to continue", 
        { font: "48px Helvetica", fill: "#ffffff", align: "center" }
    );

    text.anchor.set(0.5);
    
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