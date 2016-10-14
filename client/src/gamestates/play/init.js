var creatureConfig = require('./creatureconfig.js');

var init = function(levelConfig){
    
    console.log('[PHASER][Play][Init]', levelConfig);
    
    this.levelConfig = levelConfig;
    this.creatureConfig = creatureConfig;
};

module.exports = init;