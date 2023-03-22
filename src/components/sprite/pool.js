function EnemyPool(game){
    Phaser.Group.call(this, game);
}

EnemyPool.prototype = Object.create(ExtendedSprite.prototype);
EnemyPool.prototype.constructor = EnemyPool;

EnemyPool.prototype.populate = function(){
    
};

EnemyPool.prototype.create = function(){
    
};

module.exports = EnemyPool;