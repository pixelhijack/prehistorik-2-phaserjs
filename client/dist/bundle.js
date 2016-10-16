/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var globalConfig = __webpack_require__(/*! ./globalconfig.js */ 1);
	var Menu = __webpack_require__(/*! ./gamestates/menu/menu.js */ 2);
	var Play = __webpack_require__(/*! ./gamestates/play/play.js */ 6);
	var GameOver = __webpack_require__(/*! ./gamestates/gameover/gameover.js */ 39);
	
	// instantiate a Phaser.Game
	var PRE2 = new Phaser.Game(
	    globalConfig.width, 
	    globalConfig.height, 
	    Phaser.AUTO, 
	    globalConfig.domElement
	);
	
	// register gamestates (will be instantiated w/ this.game as 1st param, pass globalConfig as 2nd)
	PRE2.state.add('Menu', Menu.bind(null, globalConfig));
	PRE2.state.add('Play', Play.bind(null, globalConfig));
	PRE2.state.add('GameOver', GameOver.bind(null, globalConfig));
	
	// kick off first gamestate: Menu
	PRE2.state.start('Menu', true, true, { 
	    initialConfig: 'some initial state'
	});

/***/ },
/* 1 */
/*!************************************!*\
  !*** ./client/src/globalconfig.js ***!
  \************************************/
/***/ function(module, exports) {

	var globalConfig = {
	    width: 546,
	    height: 368,
	    blocks: 3,
	    domElement: 'app',
	    backgroundPath: 'backgrounds/',
	    tilesetPath: 'tilesets/',
	    levelPath: 'levels/',
	    textureAtlasPath: 'spritesheets/',
	    textureAtlasName: 'pre2atlas',
	    textureAtlasImage: 'pre2atlas.png',
	    textureAtlasJson: 'pre2atlas.json'
	};
	
	module.exports = globalConfig;

/***/ },
/* 2 */
/*!********************************************!*\
  !*** ./client/src/gamestates/menu/menu.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var GameState = __webpack_require__(/*! ../../components/gamestate/gamestate.js */ 3);
	var create = __webpack_require__(/*! ./create.js */ 4);
	var update = __webpack_require__(/*! ./update.js */ 5);
	
	/*
	    @Menu
	    inherits from GameState component
	*/
	function Menu(globalConfig){
	    GameState.call(this);
	    this.globalConfig = globalConfig;
	}
	Menu.prototype = Object.create(GameState.prototype);
	Menu.prototype.constructor = Menu;
	
	/*
	    @override 
	*/
	Menu.prototype = {
	    create: create,
	    update: update
	};
	
	module.exports = Menu;


/***/ },
/* 3 */
/*!******************************************************!*\
  !*** ./client/src/components/gamestate/gamestate.js ***!
  \******************************************************/
/***/ function(module, exports) {

	function GameState(){
	    this.keys = undefined;
	}
	
	GameState.prototype.init = function(configs){
	    console.log('[PHASER][Component][Init]', configs);
	};
	
	GameState.prototype.preload = function(){
	    console.log('[PHASER][Component][Preload]');
	};
	
	GameState.prototype.create = function(){
	    console.log('[PHASER][Component][Create]');
	};
	
	GameState.prototype.update = function(){
	    console.log('[PHASER][Component][Update]');
	};
	
	module.exports = GameState;

/***/ },
/* 4 */
/*!**********************************************!*\
  !*** ./client/src/gamestates/menu/create.js ***!
  \**********************************************/
/***/ function(module, exports) {

	var create = function(){
	    
	    // fps debugging
	    this.game.time.advancedTiming = true;
	
	    // CTA text
	    var text = this.game.add.text(
	        this.globalConfig.width / 2, 
	        this.globalConfig.height / 2,
	        "Menu screen\nPress space \nto start!", 
	        { font: "48px Courier", fill: "#ffffff", align: "center" }
	    );
	    
	    text.anchor.set(0.5);
	    
	    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    spaceKey.onDown.addOnce(fetchLevel, this);
	
	    // load next game state by fetching level configs
	    function fetchLevel(event){
	        
	        text.setText('Loading...');
	        
	        fetch('/level/' + Math.ceil(Math.random() * 6), {
	        	method: 'get'
	        }).then(function(response) {
	            return response.json();
	        }).then(function(json) {
	            this.game.state.start('Play', true, true, json);
	        }.bind(this));
	    }
	    
	    console.log('[PHASER][Menu][Create]');
	};
	
	module.exports = create;

/***/ },
/* 5 */
/*!**********************************************!*\
  !*** ./client/src/gamestates/menu/update.js ***!
  \**********************************************/
/***/ function(module, exports) {

	var update = function(){
	    
	    // fps 
	    this.game.debug.text(this.game.time.fps, 5, 20);
	    
	    console.log('[PHASER][Menu][Update]');
	};
	
	module.exports = update;

/***/ },
/* 6 */
/*!********************************************!*\
  !*** ./client/src/gamestates/play/play.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var GameState = __webpack_require__(/*! ../../components/gamestate/gamestate.js */ 3);
	var init = __webpack_require__(/*! ./init.js */ 7);
	var preload = __webpack_require__(/*! ./preload.js */ 9);
	var create = __webpack_require__(/*! ./create.js */ 10);
	var update = __webpack_require__(/*! ./update.js */ 37);
	var eventEmitters = __webpack_require__(/*! ./eventemitters.js */ 38);
	
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


/***/ },
/* 7 */
/*!********************************************!*\
  !*** ./client/src/gamestates/play/init.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var creatureConfig = __webpack_require__(/*! ./creatureconfig.js */ 8);
	
	var init = function(levelConfig){
	    
	    console.log('[PHASER][Play][Init]', levelConfig);
	    
	    this.levelConfig = levelConfig;
	    this.creatureConfig = creatureConfig;
	};
	
	module.exports = init;

/***/ },
/* 8 */
/*!******************************************************!*\
  !*** ./client/src/gamestates/play/creatureconfig.js ***!
  \******************************************************/
/***/ function(module, exports) {

	var creatureConfigs = {
	  creatureDefaults: {
	    active: true,
	    gravity: 500,
	    bounce: 0.2,
	    mass: 1,
	    jumping: 300,
	    maxSpeed: 100,
	    acceleration: 10,
	    collide: true,
	    lives: 1, 
	    lifespan: Infinity,
	    sense: 150,
	    animations: [], 
	    boundTo : {
	      x1: 1000,
	      x2: 1200
	    },
	    correctedAnchor: {
	      x: 0.5,
	      y: 0.5
	    }
	  },
	  man: {
	    maxSpeed: 200,
	    lives: 8, 
	    lifespan: Infinity,
	    animations: [
	      { name: 'move', frames: [11,'03','05',14,20], fps: 10, loop: false }, 
	      { name: 'hit', frames: [22,24,28,31,34,22,24,28,31,34], fps: 10, loop: true }, 
	      { name: 'stop', frames: [42,45,49,52], fps: 10, loop: false }, 
	      { name: 'jump', frames: [16,41,47,50,50,50,50,50,50,50,50,13,50,13,50,13], fps: 10, loop: false }, 
	      { name: 'idle', frames: [25,25,25,25,25,25,25,25,27,27,27,27,25,25,25,25,25,25,25,25,30,25,25,25,25,25,25,25,25,27,30,27,30,35,36,25,25,25,25,25,25,25,25,'07','07','07','07','02','02'], fps: 5, loop: true }, 
	      { name: 'hurt', frames: [19], fps: 10, loop: true },
	      { name: 'stun', frames: [19], fps: 10, loop: true },
	      { name: 'die', frames: [19], fps: 10, loop: false },
	      { name: 'spawn', frames: [11,'03','05',14,20], fps: 10, loop: false }
	    ],
	    correctedAnchor: {
	      x: 0.5,
	      y: 0.8
	    }
	  },
	  dino: {
	    mass: 1.5,
	    jumping: 300,
	    maxSpeed: 50,
	    acceleration: 5, 
	    animations: [
	      { name: 'idle', frames: [360,360,360,360,360,360,360,367], fps: 5, loop: true },
	      { name: 'move', frames: [360,361,364,367,369], fps: 10, loop: true },
	      { name: 'jump', frames: [360,361,364,367,369], fps: 10, loop: true },
	      { name: 'fall', frames: [369], fps: 10, loop: true },
	      { name: 'die', frames: [371], fps: 10, loop: true },
	      { name: 'spawn', frames: [360,361,364,367], fps: 10, loop: true }
	    ]
	  },
	  bear: {
	    mass: 1.2,
	    maxSpeed: 75,
	    jumping: 0,
	    acceleration: 15, 
	    animations: [
	      { name: 'idle', frames: [321], fps: 10, loop: false },
	      { name: 'move', frames: [320,321,324], fps: 10, loop: true },
	      { name: 'spawn', frames: [366,363,358,317], fps: 10, loop: false },
	      { name: 'die', frames: [328], fps: 10, loop: true }
	    ] 
	  },
	  'super-bear': {
	    acceleration: 30,
	    maxSpeed: 200,
	    image: 'super-bear-sprite-ref', // override sprite (creature name by default)
	    animations: []
	  },
	  tiger: {
	    mass: 1.5,
	    jumping: 300,
	    maxSpeed: 50,
	    acceleration: 20, 
	    animations: [
	      { name: 'idle', frames: [393,395], fps: 10, loop: true },
	      { name: 'move', frames: [393,395], fps: 10, loop: true },
	      { name: 'jump', frames: [399,401], fps: 10, loop: false },
	      { name: 'fall', frames: [399], fps: 10, loop: false },
	      { name: 'die', frames: [402], fps: 10, loop: true },
	      { name: 'spawn', frames: [393,395], fps: 10, loop: true }
	    ]
	  },
	  ptero: {
	    mass: 0.5,
	    gravity: 0,
	    bounce: 0.1,
	    jumping: 0,
	    collide: false,
	    maxSpeed: 10,
	    acceleration: 10, 
	    animations: [
	      { name: 'idle', frames: [478,478,478,478,478,478,478,478,477,478,478,478,478,478,477,477], fps: 3, loop: true },
	      { name: 'move', frames: [403,404,405,403,404,405,405,405,405,405,405,403,404,405,403,404,405,405,405,405,405,405,405], fps: 10, loop: true },
	      { name: 'descend', frames: [405], fps: 15, loop: true },
	      { name: 'ascend', frames: [403,404,405], fps: 15, loop: true },
	      { name: 'die', frames: [471], fps: 10, loop: true },
	      { name: 'spawn', frames: [405,403,404], fps: 15, loop: true }
	    ]
	  }, 
	  dragonfly: {
	    mass: 0.5,
	    gravity: 0,
	    bounce: 0.1,
	    jumping: 0,
	    collide: false,
	    maxSpeed: 50,
	    acceleration: 10, 
	    animations: [
	      { name: 'idle', frames: [337,338], fps: 12, loop: true },
	      { name: 'move', frames: [337,338], fps: 12, loop: true },
	      { name: 'turn', frames: [339,340], fps: 12, loop: true },
	      { name: 'die', frames: [342], fps: 12, loop: true },
	      { name: 'spawn', frames: [337,338], fps: 12, loop: true }
	    ]
	  },
	  bat: {
	    mass: 0.5,
	    gravity: 0,
	    bounce: 0.1,
	    jumping: 0,
	    collide: false,
	    maxSpeed: 20,
	    acceleration: 10, 
	    animations: [
	      { name: 'idle', frames: [351,352,351,351,351,351], fps: 10, loop: true },
	      { name: 'move', frames: [357,359], fps: 10, loop: true },
	      { name: 'die', frames: [362], fps: 10, loop: true },
	      { name: 'spawn', frames: [357,359], fps: 10, loop: true }
	    ]
	  },
	  spider: {
	    mass: 0.3,
	    jumping: 0,
	    collide: true,
	    bounce: 0,
	    maxSpeed: 50,
	    acceleration: 10,
	    animations: [
	      { name: 'idle', frames: [335], fps: 10, loop: true },
	      { name: 'spawn', frames: [365,368,370,372], fps: 10, loop: false },
	      { name: 'move', frames: [299,302,305,309], fps: 10, loop: true },
	      { name: 'turn', frames: [319], fps: 10, loop: true },
	      { name: 'climb', frames: [341,343,345,347], fps: 10, loop: true },
	      { name: 'wait', frames: [332,335,372], fps: 10, loop: true },
	      { name: 'die', frames: [322], fps: 10, loop: false }
	    ]
	  },
	  native: {
	    maxSpeed: 100,
	    acceleration: 20,
	    jumping: 0,
	    animations: [
	      { name: 'idle', frames: [373], fps: 10, loop: true },
	      { name: 'move', frames: [373,376,378], fps: 10, loop: true },
	      { name: 'die', frames: [380], fps: 10, loop: false },
	      { name: 'spawn', frames: [373,376,378], fps: 10, loop: true }
	    ]
	  },
	  parrot: {
	    mass: 0.5,
	    gravity: 0,
	    bounce: 0.1,
	    jumping: 0,
	    collide: false,
	    maxSpeed: 100,
	    acceleration: 10,
	    animations: [
	      { name: 'idle', frames: [394,397,398], fps: 12, loop: true },
	      { name: 'move', frames: [394,397,398], fps: 10, loop: true },
	      { name: 'die', frames: [400], fps: 10, loop: false },
	      { name: 'spawn', frames: [394,397,398], fps: 10, loop: true }
	    ]
	  },
	  insect: {
	    mass: 1,
	    collide: true,
	    bounce: 1.5,
	    jumping: 300,
	    maxSpeed: 50,
	    acceleration: 25, 
	    animations: [
	      { name: 'idle', frames: [348,348,348,348,348,348,349], fps: 10, loop: true },
	      { name: 'move', frames: [323,348,349], fps: 10, loop: true },
	      { name: 'jump', frames: [323,348,349], fps: 10, loop: true },
	      { name: 'die', frames: [348], fps: 10, loop: true },
	      { name: 'spawn', frames: [323,348,349], fps: 10, loop: true }
	    ]
	  },
	  bug: {
	    mass: 1,
	    collide: true,
	    bounce: 1.5,
	    jumping: 300,
	    maxSpeed: 50,
	    acceleration: 25, 
	    animations: [
	      { name: 'idle', frames: [344,344,344,344,344,344,344,344,346], fps: 10, loop: true },
	      { name: 'move', frames: [344,346], fps: 10, loop: true },
	      { name: 'jump', frames: [344,346], fps: 10, loop: true },
	      { name: 'die', frames: [344], fps: 10, loop: true },
	      { name: 'spawn', frames: [344,346], fps: 10, loop: true }
	    ]
	  },
	  frog: {
	    mass: 1,
	    collide: true,
	    bounce: 1.5,
	    jumping: 500,
	    maxSpeed: 80,
	    acceleration: 40, 
	    animations: [
	      { name: 'idle', frames: [325], fps: 10, loop: true },
	      { name: 'move', frames: [325,327,331,325], fps: 10, loop: false },
	      { name: 'jump', frames: [325,327,331,325], fps: 10, loop: false },
	      { name: 'die', frames: [334], fps: 10, loop: true },
	      { name: 'spawn', frames: [325,327,331,325], fps: 10, loop: false }
	    ]
	  },
	  turtle: {
	    mass: 2,
	    jumping: 0,
	    collide: true,
	    bounce: 0.3,
	    maxSpeed: 50,
	    acceleration: 10,
	    animations: [
	      { name: 'idle', frames: [390], fps: 10, loop: true },
	      { name: 'spawn', frames: [377,381,384,385], fps: 10, loop: true },
	      { name: 'move', frames: [387,389,390,391], fps: 10, loop: true },
	      { name: 'die', frames: [392], fps: 10, loop: true }
	    ]
	  },
	  jelly: {
	    mass: 2,
	    jumping: 0,
	    collide: true,
	    bounce: 1,
	    maxSpeed: 5,
	    acceleration: 1,
	    animations: [
	      { name: 'idle', frames: [420,433,434], fps: 3, loop: true },
	      { name: 'spawn', frames: [420,433,434], fps: 3, loop: true },
	      { name: 'move', frames: [420,433,434], fps: 3, loop: true },
	      { name: 'die', frames: [420,433,434], fps: 3, loop: true }
	    ]
	  },
	  gorilla: {
	    mass: 5,
	    jumping: 300,
	    maxSpeed: 0,
	    acceleration: 0, 
	    animations: [
	      { name: 'idle', frames: [411], fps: 5, loop: true },
	      { name: 'move', frames: [411], fps: 10, loop: true },
	      { name: 'jump', frames: [411], fps: 10, loop: true },
	      { name: 'fall', frames: [411], fps: 10, loop: true },
	      { name: 'die', frames: [411], fps: 10, loop: true },
	      { name: 'spawn', frames: [411], fps: 10, loop: true }
	    ]
	  }
	};
	
	for(var creature in creatureConfigs){
	  //creatureConfigs[creature] = _.merge({}, configs.creatureDefaults, configs[creature]);  
	  var defaults = creatureConfigs['creatureDefaults'];
	  for(var prop in defaults){
	    if(creatureConfigs[creature][prop] === undefined){
	      creatureConfigs[creature][prop] = defaults[prop];
	    }
	  }  
	}
	
	module.exports = creatureConfigs;

/***/ },
/* 9 */
/*!***********************************************!*\
  !*** ./client/src/gamestates/play/preload.js ***!
  \***********************************************/
/***/ function(module, exports) {

	var preload = function(){
	    console.log('[PHASER][Play][Preload]');
	    
	    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    this.game.scale.pageAlignHorizontally = true;
	    this.game.scale.pageAlignVertically = true;
	    
	    this.game.load.atlas('pre2atlas', 'spritesheets/pre2atlas.png', 'spritesheets/pre2atlas.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    
	    // load background
	    this.game.load.image(this.levelConfig.backgroundKey, this.globalConfig.backgroundPath + this.levelConfig.backgroundImage + this.levelConfig.backgroundImageExtension);
	    // load tileset
	    this.game.load.image(this.levelConfig.tileset, this.globalConfig.tilesetPath + this.levelConfig.tilesetImage + this.levelConfig.tilesetImageExtension);
	    // load tilemap
	    this.game.load.tilemap(this.levelConfig.tilemap, this.globalConfig.levelPath + this.levelConfig.tiledJson, null, Phaser.Tilemap.TILED_JSON);
	    
	};
	
	module.exports = preload;

/***/ },
/* 10 */
/*!**********************************************!*\
  !*** ./client/src/gamestates/play/create.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var levelLoader = __webpack_require__(/*! ./levelloader.js */ 11);
	var reactions = __webpack_require__(/*! ./reactions.js */ 12);
	var creatureFactory = __webpack_require__(/*! ./creaturefactory.js */ 13);
	var Hero = __webpack_require__(/*! ../../components/sprite/hero.js */ 32);
	
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
	    
	    // [PLAYER]
	    this.player = new Hero(
	        this.game,
	        this.levelConfig.entryPoint.x, 
	        this.levelConfig.entryPoint.y, 
	        this.globalConfig.textureAtlasName,
	        this.creatureConfig.man 
	    );
	    
	    this.game.camera.follow(this.player);
	    
	    this.player.onEvents = reactions;
	    this.player.listen(this.eventsOf.keys, this.player.onEvents);
	    this.player.listen(this.eventsOf.level, this.player.onEvents);
	    
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

/***/ },
/* 11 */
/*!***************************************************!*\
  !*** ./client/src/gamestates/play/levelloader.js ***!
  \***************************************************/
/***/ function(module, exports) {

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
	        this.level.tilemap.setCollisionBetween(0, 3000, true, this.levelConfig.layers.deathLayer.key);
	    }
	};
	
	module.exports = levelLoader;

/***/ },
/* 12 */
/*!*************************************************!*\
  !*** ./client/src/gamestates/play/reactions.js ***!
  \*************************************************/
/***/ function(module, exports) {

	var reactions = function(event){
	    switch(event.type){
	        case 'MOVE': 
	            onMove.call(this, event);
	            break;
	        case 'DIE': 
	            onDie.call(this, event);
	            break;
	    }
	};
	
	function onMove(event){
	    switch(event.key){
	        case 'left':
	            this.moveLeft();
	            break;
	        case 'right':
	            this.moveRight();
	            break;
	        case 'up':
	            this.jump();
	            break;
	        case 'down':
	            break;
	        case 'stop':
	            this.stop();
	            break;
	    }   
	}
	
	function onDie(event){
	    // removing event listeners on state shutdown otherwise causing memory leak and GC fails
	    this.game.state.states.Play.eventsOf.keys.remove(this.onEvents, this);
	    this.game.state.states.Play.eventsOf.level.remove(this.onEvents, this);
	    this.game.state.start('GameOver', true, false, { levelNumber: 1 });
	}
	
	module.exports = reactions;

/***/ },
/* 13 */
/*!*******************************************************!*\
  !*** ./client/src/gamestates/play/creaturefactory.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Creature = {
	    bat: __webpack_require__(/*! ../../components/sprite/creatures/bat.js */ 14),
	    bear: __webpack_require__(/*! ../../components/sprite/creatures/bear.js */ 18),
	    bug: __webpack_require__(/*! ../../components/sprite/creatures/bug.js */ 19),
	    dino: __webpack_require__(/*! ../../components/sprite/creatures/dino.js */ 20),
	    dragonfly: __webpack_require__(/*! ../../components/sprite/creatures/dragonfly.js */ 21),
	    frog: __webpack_require__(/*! ../../components/sprite/creatures/frog.js */ 22),
	    gorilla: __webpack_require__(/*! ../../components/sprite/creatures/gorilla.js */ 23),
	    insect: __webpack_require__(/*! ../../components/sprite/creatures/insect.js */ 24),
	    jelly: __webpack_require__(/*! ../../components/sprite/creatures/jelly.js */ 25),
	    native: __webpack_require__(/*! ../../components/sprite/creatures/native.js */ 26),
	    parrot: __webpack_require__(/*! ../../components/sprite/creatures/parrot.js */ 27),
	    ptero: __webpack_require__(/*! ../../components/sprite/creatures/ptero.js */ 28),
	    spider: __webpack_require__(/*! ../../components/sprite/creatures/spider.js */ 29),
	    tiger: __webpack_require__(/*! ../../components/sprite/creatures/tiger.js */ 30),
	    turtle: __webpack_require__(/*! ../../components/sprite/creatures/turtle.js */ 31)
	};
	
	var creatureFactory = {
	    createEnemyGroup: function(){
	        this.enemies = new Phaser.Group(this.game);
	    },
	    create: function(creature){
	        var enemy = new Creature[creature.type](
	            this.game, 
	            creature.origin.x, 
	            creature.origin.y, 
	            this.globalConfig.textureAtlasName,
	            this.creatureConfig[creature.type]
	        );
	        
	        this.enemies.add(enemy);
	    }
	};
	
	module.exports = creatureFactory;

/***/ },
/* 14 */
/*!*******************************************************!*\
  !*** ./client/src/components/sprite/creatures/bat.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Bat(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Bat.prototype = Object.create(AI.prototype);
	Bat.prototype.constructor = Bat;
	
	module.exports = Bat;


/***/ },
/* 15 */
/*!********************************************!*\
  !*** ./client/src/components/sprite/ai.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ExtendedSprite = __webpack_require__(/*! ./extendedsprite.js */ 16);
	var decide = __webpack_require__(/*! ./behaviours/decide.js */ 17);
	var move = __webpack_require__(/*! ./behaviours/move.js */ 42);
	var turn = __webpack_require__(/*! ./behaviours/turn.js */ 43);
	
	/*
	    @Hero
	*/
	function AI(game, x, y, sprite, props){
	    ExtendedSprite.call(this, game, x, y, sprite, props);
	}
	
	AI.prototype = Object.create(ExtendedSprite.prototype);
	AI.prototype.constructor = AI;
	
	AI.prototype = Object.assign(
	    AI.prototype, 
	    decide,
	    move,
	    turn
	);
	
	module.exports = AI;

/***/ },
/* 16 */
/*!********************************************************!*\
  !*** ./client/src/components/sprite/extendedsprite.js ***!
  \********************************************************/
/***/ function(module, exports) {

	/*
	    @ExtendedSprite
	*/
	function ExtendedSprite(game, x, y, sprite, props){
	    
	    this.game = game;
	    this.props = props || { animations: [] };
	    
	    Phaser.Sprite.call(this, game, x, y, sprite);
	    
	    this.props.animations.forEach(function(animation){
	        this.animations.add(
	            animation.name, 
	            animation.frames.map(function(frame){ 
	                return frame.toString(); 
	            }), 
	            animation.fps, 
	            animation.loop
	        );
	    }.bind(this));
	    
	    this.game.add.existing(this);
	    this.game.physics.enable(this, Phaser.Physics.ARCADE);
	    this.body.gravity.y = this.props.gravity;
	    this.anchor.setTo(0.5, 0.5);
	    this.body.collideWorldBounds = true;
	    this.checkWorldBounds = true;
	    this.outOfBoundsKill = true;
	}
	
	ExtendedSprite.prototype = Object.create(Phaser.Sprite.prototype);
	ExtendedSprite.prototype.constructor = ExtendedSprite;
	
	ExtendedSprite.prototype.update = function(){
	    this.animations.play('idle');
	};
	
	module.exports = ExtendedSprite;

/***/ },
/* 17 */
/*!***********************************************************!*\
  !*** ./client/src/components/sprite/behaviours/decide.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	var decideBehaviour = {
	    update: function(){
	        this.animations.play('move');
	        this.turn();
	        this.move();
	    }
	};
	
	module.exports = decideBehaviour;

/***/ },
/* 18 */
/*!********************************************************!*\
  !*** ./client/src/components/sprite/creatures/bear.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Bear(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Bear.prototype = Object.create(AI.prototype);
	Bear.prototype.constructor = Bear;
	
	module.exports = Bear;


/***/ },
/* 19 */
/*!*******************************************************!*\
  !*** ./client/src/components/sprite/creatures/bug.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Bug(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Bug.prototype = Object.create(AI.prototype);
	Bug.prototype.constructor = Bug;
	
	module.exports = Bug;


/***/ },
/* 20 */
/*!********************************************************!*\
  !*** ./client/src/components/sprite/creatures/dino.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Dino(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Dino.prototype = Object.create(AI.prototype);
	Dino.prototype.constructor = Dino;
	
	module.exports = Dino;


/***/ },
/* 21 */
/*!*************************************************************!*\
  !*** ./client/src/components/sprite/creatures/dragonfly.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Dragonfly(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Dragonfly.prototype = Object.create(AI.prototype);
	Dragonfly.prototype.constructor = Dragonfly;
	
	module.exports = Dragonfly;


/***/ },
/* 22 */
/*!********************************************************!*\
  !*** ./client/src/components/sprite/creatures/frog.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Frog(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Frog.prototype = Object.create(AI.prototype);
	Frog.prototype.constructor = Frog;
	
	module.exports = Frog;


/***/ },
/* 23 */
/*!***********************************************************!*\
  !*** ./client/src/components/sprite/creatures/gorilla.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Gorilla(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Gorilla.prototype = Object.create(AI.prototype);
	Gorilla.prototype.constructor = Gorilla;
	
	module.exports = Gorilla;


/***/ },
/* 24 */
/*!**********************************************************!*\
  !*** ./client/src/components/sprite/creatures/insect.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Insect(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Insect.prototype = Object.create(AI.prototype);
	Insect.prototype.constructor = Insect;
	
	module.exports = Insect;


/***/ },
/* 25 */
/*!*********************************************************!*\
  !*** ./client/src/components/sprite/creatures/jelly.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Jelly(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Jelly.prototype = Object.create(AI.prototype);
	Jelly.prototype.constructor = Jelly;
	
	module.exports = Jelly;


/***/ },
/* 26 */
/*!**********************************************************!*\
  !*** ./client/src/components/sprite/creatures/native.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Native(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Native.prototype = Object.create(AI.prototype);
	Native.prototype.constructor = Native;
	
	module.exports = Native;


/***/ },
/* 27 */
/*!**********************************************************!*\
  !*** ./client/src/components/sprite/creatures/parrot.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Parrot(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Parrot.prototype = Object.create(AI.prototype);
	Parrot.prototype.constructor = Parrot;
	
	module.exports = Parrot;


/***/ },
/* 28 */
/*!*********************************************************!*\
  !*** ./client/src/components/sprite/creatures/ptero.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Ptero(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Ptero.prototype = Object.create(AI.prototype);
	Ptero.prototype.constructor = Ptero;
	
	module.exports = Ptero;


/***/ },
/* 29 */
/*!**********************************************************!*\
  !*** ./client/src/components/sprite/creatures/spider.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Spider(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Spider.prototype = Object.create(AI.prototype);
	Spider.prototype.constructor = Spider;
	
	module.exports = Spider;


/***/ },
/* 30 */
/*!*********************************************************!*\
  !*** ./client/src/components/sprite/creatures/tiger.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Tiger(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Tiger.prototype = Object.create(AI.prototype);
	Tiger.prototype.constructor = Tiger;
	
	module.exports = Tiger;


/***/ },
/* 31 */
/*!**********************************************************!*\
  !*** ./client/src/components/sprite/creatures/turtle.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var AI = __webpack_require__(/*! ../ai.js */ 15);
	
	function Turtle(game, x, y, sprite, props){
		AI.call(this, game, x, y, sprite, props);
	}
	Turtle.prototype = Object.create(AI.prototype);
	Turtle.prototype.constructor = Turtle;
	
	module.exports = Turtle;
	


/***/ },
/* 32 */
/*!**********************************************!*\
  !*** ./client/src/components/sprite/hero.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ExtendedSprite = __webpack_require__(/*! ./extendedsprite.js */ 16);
	var listen = __webpack_require__(/*! ./behaviours/listen.js */ 33);
	var jump = __webpack_require__(/*! ./behaviours/jump.js */ 34);
	var stop = __webpack_require__(/*! ./behaviours/stop.js */ 35);
	var move = __webpack_require__(/*! ./behaviours/move.js */ 42);
	
	/*
	    @Hero
	*/
	function Hero(game, x, y, sprite, props){
	    ExtendedSprite.call(this, game, x, y, sprite, props);
	}
	
	Hero.prototype = Object.create(ExtendedSprite.prototype);
	Hero.prototype.constructor = Hero;
	
	Hero.prototype = Object.assign(
	    Hero.prototype, 
	    listen, 
	    jump,
	    stop,
	    move
	);
	
	module.exports = Hero;

/***/ },
/* 33 */
/*!***********************************************************!*\
  !*** ./client/src/components/sprite/behaviours/listen.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	var listenBehaviour = {
	    listen: function(eventSource, callback){
	        eventSource.add(callback, this);
	    },
	    onEvents: function(event){
	        console.log('[%s]: ', this.constructor.name, event);
	    }
	};
	
	module.exports = listenBehaviour;

/***/ },
/* 34 */
/*!*********************************************************!*\
  !*** ./client/src/components/sprite/behaviours/jump.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	var jumpBehaviour = {
	    jump: function(){
	        if(this.body.touching.down || this.body.blocked.down){
	            this.body.velocity.y -= this.props.jumping;
	        }
	    }
	};
	
	module.exports = jumpBehaviour;

/***/ },
/* 35 */
/*!*********************************************************!*\
  !*** ./client/src/components/sprite/behaviours/stop.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	var stopBehaviour = {
	    stop: function(){
	        // slippery rate: 1.1, should go later to levelConfig
	        this.body.velocity.x /= 1.1;
	    }
	};
	
	module.exports = stopBehaviour;

/***/ },
/* 36 */,
/* 37 */
/*!**********************************************!*\
  !*** ./client/src/gamestates/play/update.js ***!
  \**********************************************/
/***/ function(module, exports) {

	var update = function(){
	    
	    // fps 
	    this.game.debug.text(this.game.time.fps, 5, 20);
	    
	    // [COLLISIONS]
	    this.game.physics.arcade.collide(this.player, this.level.collisionLayer);
	    
	    this.game.physics.arcade.collide(this.enemies, this.level.collisionLayer);
	    
	    this.game.physics.arcade.collide(this.player, this.level.deathLayer, function(){
	        this.eventsOf.level.dispatch({ type: 'DIE' });
	    }.bind(this));
	    
	    this.game.physics.arcade.collide(this.player, this.enemies, function(player, enemy){
	        this.game.camera.shake(0.003, 500, true, Phaser.Camera.VERTICAL, true);
	    }.bind(this));
	    
	    // [KEYPRESS] event dispatch
	    if(this.keys.left.isDown){
	        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'left' });
	    } else if(this.keys.right.isDown){
	        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'right' });
	    } else {
	        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'stop' });
	    }
	    
	    if(this.keys.up.isDown){
	        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'up' });
	    }
	    
	    if(this.keys.space.isDown){
	        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'hit' });
	    }
	    
	    console.log('[PHASER][Play][Update]');
	};
	
	module.exports = update;

/***/ },
/* 38 */
/*!*****************************************************!*\
  !*** ./client/src/gamestates/play/eventemitters.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	var eventEmitters = {
	    eventsOf: {
	        keys: new Phaser.Signal(),
	        level: new Phaser.Signal()
	    }
	};
	
	module.exports = eventEmitters;

/***/ },
/* 39 */
/*!****************************************************!*\
  !*** ./client/src/gamestates/gameover/gameover.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var GameState = __webpack_require__(/*! ../../components/gamestate/gamestate.js */ 3);
	var create = __webpack_require__(/*! ./create.js */ 40);
	var update = __webpack_require__(/*! ./update.js */ 41);
	
	/*
	    @GameOver
	    inherits from GameState component
	*/
	function GameOver(globalConfig){
	    GameState.call(this);
	    this.globalConfig = globalConfig;
	}
	GameOver.prototype = Object.create(GameState.prototype);
	GameOver.prototype.constructor = GameOver;
	
	/*
	    @override 
	*/
	GameOver.prototype = {
	    create: create,
	    update: update
	};
	
	module.exports = GameOver;


/***/ },
/* 40 */
/*!**************************************************!*\
  !*** ./client/src/gamestates/gameover/create.js ***!
  \**************************************************/
/***/ function(module, exports) {

	var create = function(){
	    
	    // fps debugging
	    this.game.time.advancedTiming = true;
	
	    // CTA text
	    var text = this.game.add.text(
	        this.globalConfig.width / 2, 
	        this.globalConfig.height / 2, 
	        "Game Over\nPress space \nto continue", 
	        { font: "48px Courier", fill: "#ffffff", align: "center" }
	    );
	
	    text.anchor.set(0.5);
	    
	    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    spaceKey.onDown.addOnce(function(){
	        this.game.state.start('Menu', true, true);
	    }, this);
	    
	    console.log('[PHASER][GameOver][Create]');
	};
	
	module.exports = create;

/***/ },
/* 41 */
/*!**************************************************!*\
  !*** ./client/src/gamestates/gameover/update.js ***!
  \**************************************************/
/***/ function(module, exports) {

	var update = function(){
	    
	    // fps 
	    this.game.debug.text(this.game.time.fps, 5, 20);
	    
	    console.log('[PHASER][GameOver][Update]');
	};
	
	module.exports = update;

/***/ },
/* 42 */
/*!*********************************************************!*\
  !*** ./client/src/components/sprite/behaviours/move.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	var moveBehaviour = {
	    moveLeft: function(){
	        this.scale.x = -1;
	        if(this.body.velocity.x > -this.props.maxSpeed){
	            this.body.velocity.x -= this.props.acceleration;
	        }
	    },
	    moveRight: function(){
	        this.scale.x = 1;
	        if(this.body.velocity.x < this.props.maxSpeed){
	            this.body.velocity.x += this.props.acceleration;
	        }
	    }, 
	    move: function(){
	        if(this.scale.x === 1){
	            this.moveRight();
	        } else {
	            this.moveLeft();
	        }
	    }
	};
	
	module.exports = moveBehaviour;

/***/ },
/* 43 */
/*!*********************************************************!*\
  !*** ./client/src/components/sprite/behaviours/turn.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	var turnBehaviour = {
	    turn: function(){
	        if(this.body.blocked.left || this.body.blocked.right){
	            this.scale.x *= -1;
	        }
	    }
	};
	
	module.exports = turnBehaviour;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map