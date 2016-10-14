var levelLoader = {
    createBackground: function(layerName){
        this.level.backgroundLayer = this.game.add.tileSprite(0, 0, this.levelConfig.width, this.levelConfig.height, this.levelConfig.backgroundKey);
    },
    createLayer: function(layer){
        this.level[layer] = this.level.tilemap.createLayer(this.levelConfig[layer]);
    },
    createLayers: function(layers){
        for(var layer in layers){
            this.level[layer] = this.level.tilemap.createLayer(this.levelConfig.layers[layer].key);
            this.level[layer].visible = this.levelConfig.layers[layer].visible;
        }
    },
    createTiles: function(tilemapKey, tilesetKey, tilesetImage){
        this.level.tilemap = this.game.add.tilemap(tilemapKey);
        this.level.tilemap.addTilesetImage(tilesetImage, tilesetKey);
        this.level.tilemap.setCollisionBetween(0, 3000, true, this.levelConfig.layers.collisionLayer.key);
    }
};

module.exports = levelLoader;