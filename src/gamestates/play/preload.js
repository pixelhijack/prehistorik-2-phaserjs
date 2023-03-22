var preload = function(){
    console.log('[PHASER][Play][Preload]');
    
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    
    this.game.load.atlas(
        'pre2atlas', 
        'spritesheets/pre2atlas.png', 
        'spritesheets/pre2atlas.json', 
        Phaser.Loader.TEXTURE_ATLAS_JSON_HASH
    );
    
    // load background
    this.game.load.image(
        this.levelConfig.backgroundKey, 
        this.globalConfig.backgroundPath + this.levelConfig.backgroundImage + this.levelConfig.backgroundImageExtension
    );

    // load tileset
    this.game.load.image(
        this.levelConfig.tileset, 
        this.globalConfig.tilesetPath + this.levelConfig.tilesetImage + this.levelConfig.tilesetImageExtension
    );
    
    // load tilemap
    this.game.load.tilemap(
        this.levelConfig.tilemap, 
        this.globalConfig.levelPath + this.levelConfig.tiledJson, 
        null, 
        Phaser.Tilemap.TILED_JSON
    );
    
};

module.exports = preload;