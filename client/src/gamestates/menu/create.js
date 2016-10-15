var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;

    // CTA text
    var startLabel = this.game.add.text(
        this.game.world.centerX, 
        this.game.world.centerY, 
        "Press space to continue", 
        { font: "48px Helvetica", fill: "#ffffff", align: "center" }
    );
    
    startLabel.anchor.set(0.5);
    
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.addOnce(fetchLevel, this);

    // load next game state by fetching level configs
    function fetchLevel(event){
        fetch('/level/1', {
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