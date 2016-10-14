var update = function(){
    
    // fps 
    this.game.debug.text(this.game.time.fps, 5, 20);
    
    // [COLLISIONS]
    this.game.physics.arcade.collide(this.player, this.level.collisionLayer);
    
    // [KEYPRESS] event dispatch
    if(this.keys.left.isDown){
        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'left' });
    } else if(this.keys.right.isDown){
        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'right' });
    } else {
        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'stop' });
    }
    
    if(this.keys.up.isDown){
        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'up' });
    }
    
    if(this.keys.space.isDown){
        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'hit' });
    }
    
    console.log('[PHASER][Play][Update]');
};

module.exports = update;