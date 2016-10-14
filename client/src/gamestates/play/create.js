var levelLoader = require('./levelloader.js');
var ExtendedSprite = require('../../components/sprite/extendedsprite.js');

var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;
    
    // [SET LEVEL] set dimensions, start physic system
    this.game.world.setBounds(0, 0, 546 * 3, 368);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    // [SET LEVEL] load level background, tiles, layers
    levelLoader.createBackground.call(this, 'backgroundLayer');
    levelLoader.createTiles.call(this, this.levelConfig.tilemap, this.levelConfig.tileset, this.levelConfig.tilesetImage);
    levelLoader.createLayers.call(this, this.levelConfig.layers);
    
    // [SET LEVEL] fix background, resize
    this.level.backgroundLayer.fixedToCamera = this.levelConfig.fixedBackground;
    this.level.groundLayer.resizeWorld();
    
    // [PLAYER]
    this.player = new ExtendedSprite(
        this.game,
        this.levelConfig.entryPoint.x, 
        this.levelConfig.entryPoint.y, 
        'pre2atlas',
        this.creatureConfig.man 
    );
    this.game.camera.follow(this.player);
    
    // bind keys
    this.keys = this.game.input.keyboard.createCursorKeys();
    this.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    // Phaser preserves binding through game states so it needs to be deleted
    // http://www.html5gamedevs.com/topic/5631-preserve-input-bindings/
    this.game.input.keyboard.onDownCallback = null;
    
    console.log('[PHASER][Play][Create]');
};

module.exports = create;