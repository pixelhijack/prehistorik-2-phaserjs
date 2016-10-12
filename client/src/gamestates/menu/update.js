var update = function(){
    
    this.game.input.keyboard.onDownCallback = function(event){
        this.game.state.start('Play', true, true, { 
            level: event.key
        });
    };
    console.log('[PHASER][Menu][Update]');
};

module.exports = update;