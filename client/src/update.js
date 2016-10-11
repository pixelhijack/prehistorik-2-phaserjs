var update = function(){
    
    if(this.keys.left.isDown){
        console.log('[PHASER] KEYS left');
    }
    if(this.keys.right.isDown){
        console.log('[PHASER] KEYS right');
    }
    if(this.keys.up.isDown){
        console.log('[PHASER] KEYS up');
    }
    if(this.keys.down.isDown){
        console.log('[PHASER] KEYS down');
    }
    if(this.keys.space.isDown){
        console.log('[PHASER] KEYS space');
    }
    
    console.log('[PHASER] UPDATE lifecycle method extracted');
};

module.exports = update;