var update = function(){
    
    // fps 
    this.game.debug.text(this.game.time.fps, 5, 20);
    
    if(this.keys.left.isDown){
        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'left' });
    }
    if(this.keys.right.isDown){
        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'right' });
    }
    if(this.keys.up.isDown){
        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'up' });
    }
    if(this.keys.down.isDown){
        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'down' });
    }
    if(this.keys.space.isDown){
        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'hit' });
    }
    
    console.log('[PHASER][Play][Update]');
};

module.exports = update;