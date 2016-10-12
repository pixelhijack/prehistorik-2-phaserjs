var update = function(){
    
    // fps 
    this.game.debug.text(this.game.time.fps, 5, 20);
    
    this.game.input.keyboard.onDownCallback = function(event){
        fetch('/level/' + event.key, {
        	method: 'get'
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            this.game.state.start('Play', true, true, { 
                levelData: json
            });
        }.bind(this));
    };
    console.log('[PHASER][Menu][Update]');
};

module.exports = update;