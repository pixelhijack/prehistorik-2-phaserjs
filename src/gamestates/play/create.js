import levelLoader from './levelloader.js';
import reactions from './reactions.js';
import creatureFactory from './creaturefactory.js';
import Hero from '../../components/sprite/hero.js';
import Thing from '../../components/sprite/things.js';
import Portal from '../../components/sprite/portal.js';
import Group from '../../components/sprite/group.js';
import Platform from '../../components/sprite/platform.js';
import assetMap from '../assetmap.js';

var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;
    
    // [SET LEVEL] set dimensions, start physic system
    this.game.world.setBounds(
        0, 
        0, 
        this.globalConfig.width * this.globalConfig.blocks, 
        this.globalConfig.height
    );
    
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    // [SET LEVEL] load level background, tiles, layers
    levelLoader.createBackground.call(this, 'backgroundLayer');
    levelLoader.createTiles.call(
        this, 
        this.levelConfig.tilemap, 
        this.levelConfig.tileset, 
        this.levelConfig.tilesetImage
    );
    levelLoader.createLayers.call(this, this.levelConfig.layers);
    
    // [SET LEVEL] fix background, resize
    this.level.backgroundLayer.fixedToCamera = this.levelConfig.fixedBackground;
    this.level.groundLayer.resizeWorld();

    // [THINGS]
    this.level.bonuses =  new Group(this.game);
    this.levelConfig.bonus.forEach(function(bonusConfig){
        let bonus = new Thing(
            this.game, 
            assetMap[bonusConfig.img], 
            bonusConfig.x, 
            bonusConfig.y
        );
        this.level.bonuses.add(bonus);
    }.bind(this));

    this.level.portals =  new Group(this.game);
    this.levelConfig.portals.forEach(function(portalConfig){
        let portal = new Portal(
            this.game, 
            portalConfig.jumpTo, 
            portalConfig.x, 
            portalConfig.y
        );
        this.level.portals.add(portal);
    }.bind(this));

    this.level.platforms =  new Group(this.game);
    this.levelConfig.platforms.forEach(function(platformConfig){
        let platform = new Platform(
            this.game, 
            assetMap[platformConfig.img], 
            platformConfig.x, 
            platformConfig.y, 
            platformConfig
        );
        this.level.platforms.add(platform);
    }.bind(this));
    
    // [PLAYER]
    this.player = new Hero(
        this.game,
        this.levelConfig.entryPoint.x, 
        this.levelConfig.entryPoint.y, 
        this.globalConfig.textureAtlasName,
        this.creatureConfig.man 
    );
    
    this.game.camera.follow(this.player);
    
    this.player.react = reactions;
    this.player.listen(this.eventsOf.keys, this.player.react);
    this.player.listen(this.eventsOf.level, this.player.react);
    
    // [CREATURES] spawn enemies
    creatureFactory.createEnemyGroup.call(this);
    this.levelConfig.enemies.forEach(creatureFactory.create.bind(this));
    
    // bind keys
    this.keys = this.game.input.keyboard.createCursorKeys();
    this.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    // Phaser preserves binding through game states so it needs to be deleted
    // http://www.html5gamedevs.com/topic/5631-preserve-input-bindings/
    
    console.log('[PHASER][Play][Create]');
};

module.exports = create;