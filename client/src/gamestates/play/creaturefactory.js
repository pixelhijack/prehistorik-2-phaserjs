var Creature = {
    bat: require('../../components/sprite/creatures/bat.js'),
    bear: require('../../components/sprite/creatures/bear.js'),
    bug: require('../../components/sprite/creatures/bug.js'),
    dino: require('../../components/sprite/creatures/dino.js'),
    dragonfly: require('../../components/sprite/creatures/dragonfly.js'),
    frog: require('../../components/sprite/creatures/frog.js'),
    gorilla: require('../../components/sprite/creatures/gorilla.js'),
    insect: require('../../components/sprite/creatures/insect.js'),
    jelly: require('../../components/sprite/creatures/jelly.js'),
    native: require('../../components/sprite/creatures/native.js'),
    parrot: require('../../components/sprite/creatures/parrot.js'),
    ptero: require('../../components/sprite/creatures/ptero.js'),
    spider: require('../../components/sprite/creatures/spider.js'),
    tiger: require('../../components/sprite/creatures/tiger.js'),
    turtle: require('../../components/sprite/creatures/turtle.js')
};

var creatureFactory = {
    createEnemyGroup: function(){
        this.enemies = new Phaser.Group(this.game);
    },
    create: function(creature){
        var enemy = new Creature[creature.type](
            this.game, 
            creature.origin.x, 
            creature.origin.y, 
            this.globalConfig.textureAtlasName,
            this.creatureConfig[creature.type]
        );
        
        enemy.listen(this.eventsOf.level, enemy.react);
        enemy.setBounds(creature.boundTo);
        
        this.enemies.add(enemy);
    }
};

module.exports = creatureFactory;