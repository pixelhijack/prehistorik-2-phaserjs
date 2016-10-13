var preload = function(){
    console.log('[PHASER][Play][Preload]');
    
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    
    // load background
    this.game.load.image(this.levelConfig.backgroundKey, this.globalConfig.BACKGROUND_PATH + this.levelConfig.backgroundImage + this.levelConfig.backgroundImageExtension);
    // load tileset
    this.game.load.image(this.levelConfig.tileset, this.globalConfig.TILESET_PATH + this.levelConfig.tilesetImage + this.levelConfig.tilesetImageExtension);
    // load tilemap
    this.game.load.tilemap(this.levelConfig.tilemap, this.globalConfig.LEVEL_PATH + this.levelConfig.tiledJson, null, Phaser.Tilemap.TILED_JSON);
    
};

module.exports = preload;