var init = function(configs){
    
    console.log('[PHASER][Play][Init]', configs);
    
    this.level = {
        data: configs.levelData.level,
        config: configs.levelData.config,
        instance: undefined
    };
};

module.exports = init;