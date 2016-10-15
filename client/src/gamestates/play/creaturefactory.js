var ExtendedSprite = require('../../components/sprite/extendedsprite.js');

var creatureFactory = {
    createEnemyGroup: function(){
        this.enemies = new Phaser.Group(this.game);
    },
    create: function(creature){
        var enemy = new ExtendedSprite(
            this.game, 
            creature.origin.x, 
            creature.origin.y, 
            this.globalConfig.textureAtlasName,
            this.creatureConfig[creature.type]
        );
        
        this.enemies.add(enemy);
    }
};

module.exports = creatureFactory;