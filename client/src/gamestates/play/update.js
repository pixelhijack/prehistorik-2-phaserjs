var update = function(){
    
    // fps 
    this.game.debug.text(this.game.time.fps, 5, 20);
    
    if(this.keys.left.isDown){
        console.log('[PHASER] KEYS left');
        this.player.body.x-=20;
    }
    if(this.keys.right.isDown){
        console.log('[PHASER] KEYS right');
        this.player.body.x+=20;
    }
    if(this.keys.up.isDown){
        console.log('[PHASER] KEYS up');
        this.player.body.y-=20;
    }
    if(this.keys.down.isDown){
        console.log('[PHASER] KEYS down');
        this.player.body.y+=20;
    }
    if(this.keys.space.isDown){
        console.log('[PHASER] KEYS space');
    }
    
    console.log('[PHASER][Play][Update]');
};

module.exports = update;