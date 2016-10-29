var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;

    // CTA text
    var text = this.game.add.text(
        this.globalConfig.width / 2, 
        this.globalConfig.height / 2,
        "Menu screen\nPress space \nto start!", 
        { font: "48px Courier", fill: "#ffffff", align: "center" }
    );
    
    text.anchor.set(0.5);
    
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.game.input.addPointer();
    
    this.game.input.onDown.addOnce(fetchLevel, this);
    spaceKey.onDown.addOnce(fetchLevel, this);

    // load next game state by fetching level configs
    function fetchLevel(event){
        
        text.setText('Loading...');
        
        fetch('/level/3', {
        	method: 'get'
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            this.game.state.start('Play', true, true, json);
        }.bind(this));
    }
    
    console.log('[PHASER][Menu][Create]');
};

module.exports = create;