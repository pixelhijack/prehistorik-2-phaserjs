var GameState = require('../../components/gamestate/gamestate.js');
var init = require('./init.js');
var preload = require('./preload.js');
var create = require('./create.js');
var update = require('./update.js');
var eventEmitters = require('./eventemitters.js');

/*
    @Play
    inherits from GameState component
*/
function Play(globalConfig){
    GameState.call(this);
    this.globalConfig = globalConfig;
    
    // extend Phaser gamestate with: 
    this.keys = undefined;
    this.player = undefined;
    this.levelConfig = undefined;
    this.level = {
        backgroundLayer: undefined,
        groundLayer: undefined,
        tilemap: undefined
    };
    this.enemies = undefined;
}
Play.prototype = Object.create(GameState.prototype);
Play.prototype.constructor = Play;

/*
    @override 
*/
Play.prototype = {
    init: init,
    preload: preload,
    create: create,
    update: update
};

/*
    @extend
*/
Play.prototype = Object.assign(Play.prototype, eventEmitters);

module.exports = Play;
