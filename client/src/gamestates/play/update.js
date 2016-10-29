var update = function(){
    
    // fps 
    this.game.debug.text(this.game.time.fps, 5, 20);
    
    this.enemies.forEachAlive(function(creature){
        //creature.debug(creature.id);
    });
    
    // [COLLISIONS]
    this.game.physics.arcade.collide(this.player, this.level.collisionLayer);
    
    this.game.physics.arcade.collide(this.enemies, this.level.collisionLayer);
    
    this.game.physics.arcade.collide(this.player, this.level.deathLayer, function(){
        this.eventsOf.level.dispatch({ type: 'DIE' });
    }.bind(this));
    
    this.game.physics.arcade.collide(this.player, this.enemies, function(player, enemy){
        this.game.camera.shake(0.003, 500, true, Phaser.Camera.VERTICAL, true);
        this.eventsOf.level.dispatch({ type: 'HURT' });
    }.bind(this));
    
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