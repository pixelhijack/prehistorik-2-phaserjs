import bat from '../../components/sprite/creatures/bat.js';
import bear from '../../components/sprite/creatures/bear.js';
import bug from '../../components/sprite/creatures/bug.js';
import dino from '../../components/sprite/creatures/dino.js';
import dragonfly from '../../components/sprite/creatures/dragonfly.js';
import frog from '../../components/sprite/creatures/frog.js';
import gorilla from '../../components/sprite/creatures/gorilla.js';
import insect from '../../components/sprite/creatures/insect.js';
import jelly from '../../components/sprite/creatures/jelly.js';
import native from '../../components/sprite/creatures/native.js';
import parrot from '../../components/sprite/creatures/parrot.js';
import ptero from '../../components/sprite/creatures/ptero.js';
import spider from '../../components/sprite/creatures/spider.js';
import tiger from '../../components/sprite/creatures/tiger.js';
import turtle from '../../components/sprite/creatures/turtle.js';

var Creature = {
    bat: bat,
    bear: bear,
    bug: bug,
    dino: dino,
    dragonfly: dragonfly,
    frog: frog,
    gorilla: gorilla,
    insect: insect,
    jelly: jelly,
    native: native,
    parrot: parrot,
    ptero: ptero,
    spider: spider,
    tiger: tiger,
    turtle: turtle
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