var update = function(){
    
    // console.log('[PHASER][Play][Update]');
    
    // [DEBUG] fps 
    this.game.debug.text(this.game.time.fps, 5, 20);
    
    // [COLLISIONS]
    this.game.physics.arcade.collide(this.player, this.level.collisionLayer);
    
    this.game.physics.arcade.collide(this.enemies, this.level.collisionLayer);
    
    this.game.physics.arcade.collide(this.player, this.level.deathLayer, function(){
        this.eventsOf.level.dispatch({ type: 'DIE' });
    }.bind(this));
    
    this.game.physics.arcade.collide(this.player, this.enemies, function(player, enemy){
        
        this.game.camera.shake(0.003, 500, true, Phaser.Camera.VERTICAL, true);
        if(this.player.hasState('hit')){
            this.eventsOf.level.dispatch({ 
                type: 'HURT', 
                subject: enemy.id,
                direction: enemy.body.touching 
            });
        } else {
            this.eventsOf.level.dispatch({ 
                type: 'HURT', 
                subject: this.player, 
                direction: this.player.body.touching 
            });
        }
    }.bind(this));
    
    /*
    debugEnemies.call(this, function(){
        return this.facingRight;
    });
    */
    
    // [KEYPRESS] event dispatch
    handleKeypress.call(this);
};

function handleKeypress(){
    if(this.player.hasState('hurt')){
        return;
    }
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
}

function debugEnemies(debugCallback){
    this.enemies.forEachAlive(function(enemy){
        enemy.debug(debugCallback.call(enemy));
    });
}

module.exports = update;