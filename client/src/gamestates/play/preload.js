var preload = function(){
    console.log('[PHASER][Play][Preload]');
    
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    
    // load background
    this.game.load.image(this.levelConfig.backgroundLayer, 'backgrounds/' + this.levelConfig.backgroundImage + '.jpg');
    // load tileset
    this.game.load.image(this.levelConfig.tileset, 'tilesets/' + this.levelConfig.tilesetImage + '.png');
    // load tilemap
    this.game.load.tilemap(this.levelConfig.tilemap, 'levels/' + this.levelConfig.tiledJson + '.json', null, Phaser.Tilemap.TILED_JSON);
    
};

module.exports = preload;