var create = function(){
    
    // fps debugging
    this.game.time.advancedTiming = true;
    
    this.game.world.setBounds(0, 0, 546 * 3, 368);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.level.backgroundLayer = this.game.add.tileSprite(0, 0, this.levelConfig.width, this.levelConfig.height, this.levelConfig.backgroundLayer);
    this.level.tilemap = this.game.add.tilemap(this.levelConfig.tilemap);
    this.level.tilemap.addTilesetImage(this.levelConfig.tilesetImage, this.levelConfig.tileset);
    this.level.groundLayer = this.level.tilemap.createLayer(this.levelConfig.groundLayer);
    this.level.backgroundLayer.fixedToCamera = this.levelConfig.fixedBackground;
    this.level.groundLayer.resizeWorld();
    
    this.player = this.game.add.sprite(0, this.game.world.height - 100, 'nonExistingSpriteKey');
    this.game.physics.enable(this.player);
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