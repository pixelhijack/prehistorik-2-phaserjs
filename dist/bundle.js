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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _globalconfig = __webpack_require__(/*! ./globalconfig.js */ 1);
	
	var _globalconfig2 = _interopRequireDefault(_globalconfig);
	
	var _menu = __webpack_require__(/*! ./gamestates/menu/menu.js */ 2);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _play = __webpack_require__(/*! ./gamestates/play/play.js */ 4);
	
	var _play2 = _interopRequireDefault(_play);
	
	var _gameover = __webpack_require__(/*! ./gamestates/gameover/gameover.js */ 49);
	
	var _gameover2 = _interopRequireDefault(_gameover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// instantiate a Phaser.Game
	var PRE2 = new Phaser.Game(_globalconfig2.default.width, _globalconfig2.default.height, Phaser.AUTO, _globalconfig2.default.domElement);
	
	// register gamestates (will be instantiated w/ this.game as 1st param, pass globalConfig as 2nd)
	PRE2.state.add('Menu', _menu2.default.bind(null, _globalconfig2.default));
	PRE2.state.add('Play', _play2.default.bind(null, _globalconfig2.default));
	PRE2.state.add('GameOver', _gameover2.default.bind(null, _globalconfig2.default));
	
	// kick off first gamestate: Menu
	PRE2.state.start('Menu', true, true, {
	    initialConfig: 'some initial state'
	});

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/globalconfig.js ***!
  \*****************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	exports.default = globalConfig;

/***/ }),
/* 2 */
/*!*************************************!*\
  !*** ./src/gamestates/menu/menu.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gamestate = __webpack_require__(/*! ../../components/gamestate/gamestate.js */ 3);
	
	var _gamestate2 = _interopRequireDefault(_gamestate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	    @Menu
	    inherits from GameState component
	*/
	function Menu(globalConfig) {
	    _gamestate2.default.call(this);
	    this.globalConfig = globalConfig;
	}
	Menu.prototype = Object.create(_gamestate2.default.prototype);
	Menu.prototype.constructor = Menu;
	
	/*
	    @override 
	*/
	Menu.prototype = {
	    preload: preload,
	    create: create,
	    update: update
	};
	
	function preload() {
	    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    this.game.scale.pageAlignHorizontally = true;
	    this.game.scale.pageAlignVertically = true;
	    this.game.load.image('menu-background', 'assets/backgrounds/bg1seamless.png');
	};
	
	function create() {
	
	    var level = window.location.pathname.split('/level/')[1] || Math.ceil(Math.random() * 6);
	
	    // fps debugging
	    this.game.time.advancedTiming = true;
	
	    var dimensions = {
	        width: 546,
	        height: 372
	    };
	    // menu background
	    var backgroundLayer = this.game.add.tileSprite(0, 0, dimensions.width, dimensions.height, 'menu-background');
	
	    var texts = [{
	        key: 1,
	        text: 'The Great Abyss',
	        id: 'great-abyss'
	    }, {
	        key: 2,
	        text: 'Downfall Rifts',
	        id: 'downfall-rifts'
	    }, {
	        key: 3,
	        text: 'Green Hell',
	        id: 'green-hell'
	    }, {
	        key: 4,
	        text: 'Hall of Ages',
	        id: 'hall-of-ages'
	    }, {
	        key: 5,
	        text: 'Into the Woods',
	        id: 'into-the-woods'
	    }, {
	        key: 6,
	        text: 'Mosquito Falls',
	        id: 'mosquito-falls'
	    }, {
	        key: 7,
	        text: 'Rise of the Tide',
	        id: 'rise-of-the-tide'
	    }, {
	        key: 8,
	        text: 'Stairway from Heaven',
	        id: 'stairway-from-heaven'
	    }].map(function (line, i) {
	        line.textRef = this.game.add.text(20, 30 + i * 20, line.key + ' - ' + line.text, {
	            font: "18px Courier",
	            fill: "#ffffff"
	        });
	        return line;
	    }.bind(this));
	
	    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    this.game.input.addPointer();
	
	    this.game.input.onDown.addOnce(fetchLevel, this);
	    spaceKey.onDown.addOnce(fetchLevel, this);
	
	    // load next game state by fetching level configs
	    function fetchLevel(event) {
	        fetch('/api/levels/' + level, {
	            method: 'get'
	        }).then(function (response) {
	            return response.json();
	        }).then(function (levelconfig) {
	            this.game.state.start('Play', true, true, levelconfig);
	        }.bind(this));
	    }
	
	    console.log('[PHASER][Menu][Create]');
	};
	
	function update() {
	    // fps 
	    this.game.debug.text(this.game.time.fps, 5, 20);
	}
	
	module.exports = Menu;

/***/ }),
/* 3 */
/*!***********************************************!*\
  !*** ./src/components/gamestate/gamestate.js ***!
  \***********************************************/
/***/ (function(module, exports) {

	'use strict';
	
	function GameState() {
	    this.keys = undefined;
	}
	
	GameState.prototype.init = function (configs) {
	    console.log('[PHASER][Component][Init]', configs);
	};
	
	GameState.prototype.preload = function () {
	    console.log('[PHASER][Component][Preload]');
	};
	
	GameState.prototype.create = function () {
	    console.log('[PHASER][Component][Create]');
	};
	
	GameState.prototype.update = function () {
	    console.log('[PHASER][Component][Update]');
	};
	
	module.exports = GameState;

/***/ }),
/* 4 */
/*!*************************************!*\
  !*** ./src/gamestates/play/play.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var GameState = __webpack_require__(/*! ../../components/gamestate/gamestate.js */ 3);
	var init = __webpack_require__(/*! ./init.js */ 5);
	var preload = __webpack_require__(/*! ./preload.js */ 7);
	var create = __webpack_require__(/*! ./create.js */ 8);
	var update = __webpack_require__(/*! ./update.js */ 47);
	var eventEmitters = __webpack_require__(/*! ./eventemitters.js */ 48);
	
	/*
	    @Play
	    inherits from GameState component
	*/
	function Play(globalConfig) {
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

/***/ }),
/* 5 */
/*!*************************************!*\
  !*** ./src/gamestates/play/init.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var creatureConfig = __webpack_require__(/*! ./creatureconfig.js */ 6);
	
	var init = function init(levelConfig) {
	
	    console.log('[PHASER][Play][Init]', levelConfig);
	
	    this.levelConfig = levelConfig;
	    this.creatureConfig = creatureConfig;
	};
	
	module.exports = init;

/***/ }),
/* 6 */
/*!***********************************************!*\
  !*** ./src/gamestates/play/creatureconfig.js ***!
  \***********************************************/
/***/ (function(module, exports) {

	'use strict';
	
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
	    timeOf: {
	      'move': 200,
	      'hit': 100,
	      'hurt': 500,
	      'stop': 200,
	      'idle': 10
	    },
	    boundTo: {
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
	    animations: [{ name: 'move', frames: [11, '03', '05', 14, 20], fps: 10, loop: false }, { name: 'hit', frames: [22, 24, 28, 31, 34, 22, 24, 28, 31, 34], fps: 10, loop: true }, { name: 'stop', frames: [42, 45, 49, 52], fps: 10, loop: false }, { name: 'jump', frames: [16, 41, 47, 50, 50, 50, 50, 50, 50, 50, 50, 13, 50, 13, 50, 13], fps: 10, loop: false }, { name: 'idle', frames: [25, 25, 25, 25, 25, 25, 25, 25, 27, 27, 27, 27, 25, 25, 25, 25, 25, 25, 25, 25, 30, 25, 25, 25, 25, 25, 25, 25, 25, 27, 30, 27, 30, 35, 36, 25, 25, 25, 25, 25, 25, 25, 25, '07', '07', '07', '07', '02', '02'], fps: 5, loop: true }, { name: 'hurt', frames: [19], fps: 10, loop: true }, { name: 'stun', frames: [19], fps: 10, loop: true }, { name: 'die', frames: [19], fps: 10, loop: false }, { name: 'spawn', frames: [11, '03', '05', 14, 20], fps: 10, loop: false }],
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
	    animations: [{ name: 'idle', frames: [360, 360, 360, 360, 360, 360, 360, 367], fps: 5, loop: true }, { name: 'move', frames: [360, 361, 364, 367, 369], fps: 10, loop: true }, { name: 'jump', frames: [360, 361, 364, 367, 369], fps: 10, loop: true }, { name: 'fall', frames: [369], fps: 10, loop: true }, { name: 'die', frames: [371], fps: 10, loop: true }, { name: 'spawn', frames: [360, 361, 364, 367], fps: 10, loop: true }]
	  },
	  bear: {
	    mass: 1.2,
	    maxSpeed: 75,
	    jumping: 0,
	    acceleration: 15,
	    animations: [{ name: 'idle', frames: [321], fps: 10, loop: false }, { name: 'move', frames: [320, 321, 324], fps: 10, loop: true }, { name: 'spawn', frames: [366, 363, 358, 317], fps: 10, loop: false }, { name: 'die', frames: [328], fps: 10, loop: true }]
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
	    animations: [{ name: 'idle', frames: [393, 395], fps: 10, loop: true }, { name: 'move', frames: [393, 395], fps: 10, loop: true }, { name: 'jump', frames: [399, 401], fps: 10, loop: false }, { name: 'fall', frames: [399], fps: 10, loop: false }, { name: 'die', frames: [402], fps: 10, loop: true }, { name: 'spawn', frames: [393, 395], fps: 10, loop: true }]
	  },
	  ptero: {
	    mass: 0.5,
	    gravity: 0,
	    bounce: 0.1,
	    jumping: 0,
	    collide: false,
	    maxSpeed: 10,
	    acceleration: 10,
	    animations: [{ name: 'idle', frames: [478, 478, 478, 478, 478, 478, 478, 478, 477, 478, 478, 478, 478, 478, 477, 477], fps: 3, loop: true }, { name: 'move', frames: [403, 404, 405, 403, 404, 405, 405, 405, 405, 405, 405, 403, 404, 405, 403, 404, 405, 405, 405, 405, 405, 405, 405], fps: 10, loop: true }, { name: 'descend', frames: [405], fps: 15, loop: true }, { name: 'ascend', frames: [403, 404, 405], fps: 15, loop: true }, { name: 'die', frames: [471], fps: 10, loop: true }, { name: 'spawn', frames: [405, 403, 404], fps: 15, loop: true }]
	  },
	  dragonfly: {
	    mass: 0.5,
	    gravity: 0,
	    bounce: 0.1,
	    jumping: 0,
	    collide: false,
	    maxSpeed: 50,
	    acceleration: 10,
	    animations: [{ name: 'idle', frames: [337, 338], fps: 12, loop: true }, { name: 'move', frames: [337, 338], fps: 12, loop: true }, { name: 'turn', frames: [339, 340], fps: 12, loop: true }, { name: 'die', frames: [342], fps: 12, loop: true }, { name: 'spawn', frames: [337, 338], fps: 12, loop: true }]
	  },
	  bat: {
	    mass: 0.5,
	    gravity: 0,
	    bounce: 0.1,
	    jumping: 0,
	    collide: false,
	    maxSpeed: 20,
	    acceleration: 10,
	    animations: [{ name: 'idle', frames: [351, 352, 351, 351, 351, 351], fps: 10, loop: true }, { name: 'move', frames: [357, 359], fps: 10, loop: true }, { name: 'die', frames: [362], fps: 10, loop: true }, { name: 'spawn', frames: [357, 359], fps: 10, loop: true }]
	  },
	  spider: {
	    mass: 0.3,
	    jumping: 0,
	    collide: true,
	    bounce: 0,
	    maxSpeed: 50,
	    acceleration: 10,
	    animations: [{ name: 'idle', frames: [335], fps: 10, loop: true }, { name: 'spawn', frames: [365, 368, 370, 372], fps: 10, loop: false }, { name: 'move', frames: [299, 302, 305, 309], fps: 10, loop: true }, { name: 'turn', frames: [319], fps: 10, loop: true }, { name: 'climb', frames: [341, 343, 345, 347], fps: 10, loop: true }, { name: 'wait', frames: [332, 335, 372], fps: 10, loop: true }, { name: 'die', frames: [322], fps: 10, loop: false }]
	  },
	  native: {
	    maxSpeed: 100,
	    acceleration: 20,
	    jumping: 0,
	    animations: [{ name: 'idle', frames: [373], fps: 10, loop: true }, { name: 'move', frames: [373, 376, 378], fps: 10, loop: true }, { name: 'die', frames: [380], fps: 10, loop: false }, { name: 'spawn', frames: [373, 376, 378], fps: 10, loop: true }]
	  },
	  parrot: {
	    mass: 0.5,
	    gravity: 0,
	    bounce: 0.1,
	    jumping: 0,
	    collide: false,
	    maxSpeed: 100,
	    acceleration: 10,
	    animations: [{ name: 'idle', frames: [394, 397, 398], fps: 12, loop: true }, { name: 'move', frames: [394, 397, 398], fps: 10, loop: true }, { name: 'die', frames: [400], fps: 10, loop: false }, { name: 'spawn', frames: [394, 397, 398], fps: 10, loop: true }]
	  },
	  insect: {
	    mass: 1,
	    collide: true,
	    bounce: 1.5,
	    jumping: 300,
	    maxSpeed: 50,
	    acceleration: 25,
	    animations: [{ name: 'idle', frames: [348, 348, 348, 348, 348, 348, 349], fps: 10, loop: true }, { name: 'move', frames: [323, 348, 349], fps: 10, loop: true }, { name: 'jump', frames: [323, 348, 349], fps: 10, loop: true }, { name: 'die', frames: [348], fps: 10, loop: true }, { name: 'spawn', frames: [323, 348, 349], fps: 10, loop: true }]
	  },
	  bug: {
	    mass: 1,
	    collide: true,
	    bounce: 1.5,
	    jumping: 300,
	    maxSpeed: 50,
	    acceleration: 25,
	    animations: [{ name: 'idle', frames: [344, 344, 344, 344, 344, 344, 344, 344, 346], fps: 10, loop: true }, { name: 'move', frames: [344, 346], fps: 10, loop: true }, { name: 'jump', frames: [344, 346], fps: 10, loop: true }, { name: 'die', frames: [344], fps: 10, loop: true }, { name: 'spawn', frames: [344, 346], fps: 10, loop: true }]
	  },
	  frog: {
	    mass: 1,
	    collide: true,
	    bounce: 1.5,
	    jumping: 500,
	    maxSpeed: 80,
	    acceleration: 40,
	    animations: [{ name: 'idle', frames: [325], fps: 10, loop: true }, { name: 'move', frames: [325, 327, 331, 325], fps: 10, loop: false }, { name: 'jump', frames: [325, 327, 331, 325], fps: 10, loop: false }, { name: 'die', frames: [334], fps: 10, loop: true }, { name: 'spawn', frames: [325, 327, 331, 325], fps: 10, loop: false }]
	  },
	  turtle: {
	    mass: 2,
	    jumping: 0,
	    collide: true,
	    bounce: 0.3,
	    maxSpeed: 50,
	    acceleration: 10,
	    animations: [{ name: 'idle', frames: [390], fps: 10, loop: true }, { name: 'spawn', frames: [377, 381, 384, 385], fps: 10, loop: true }, { name: 'move', frames: [387, 389, 390, 391], fps: 10, loop: true }, { name: 'die', frames: [392], fps: 10, loop: true }]
	  },
	  jelly: {
	    mass: 2,
	    jumping: 0,
	    collide: true,
	    bounce: 1,
	    maxSpeed: 5,
	    acceleration: 1,
	    animations: [{ name: 'idle', frames: [420, 433, 434], fps: 3, loop: true }, { name: 'spawn', frames: [420, 433, 434], fps: 3, loop: true }, { name: 'move', frames: [420, 433, 434], fps: 3, loop: true }, { name: 'die', frames: [420, 433, 434], fps: 3, loop: true }]
	  },
	  gorilla: {
	    mass: 5,
	    jumping: 300,
	    maxSpeed: 0,
	    acceleration: 0,
	    animations: [{ name: 'idle', frames: [411], fps: 5, loop: true }, { name: 'move', frames: [411], fps: 10, loop: true }, { name: 'jump', frames: [411], fps: 10, loop: true }, { name: 'fall', frames: [411], fps: 10, loop: true }, { name: 'die', frames: [411], fps: 10, loop: true }, { name: 'spawn', frames: [411], fps: 10, loop: true }]
	  }
	};
	
	for (var creature in creatureConfigs) {
	  //creatureConfigs[creature] = _.merge({}, configs.creatureDefaults, configs[creature]);  
	  var defaults = creatureConfigs['creatureDefaults'];
	  for (var prop in defaults) {
	    if (creatureConfigs[creature][prop] === undefined) {
	      creatureConfigs[creature][prop] = defaults[prop];
	    }
	  }
	}
	
	module.exports = creatureConfigs;

/***/ }),
/* 7 */
/*!****************************************!*\
  !*** ./src/gamestates/play/preload.js ***!
  \****************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var preload = function preload() {
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

/***/ }),
/* 8 */
/*!***************************************!*\
  !*** ./src/gamestates/play/create.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _levelloader = __webpack_require__(/*! ./levelloader.js */ 9);
	
	var _levelloader2 = _interopRequireDefault(_levelloader);
	
	var _reactions = __webpack_require__(/*! ./reactions.js */ 10);
	
	var _reactions2 = _interopRequireDefault(_reactions);
	
	var _creaturefactory = __webpack_require__(/*! ./creaturefactory.js */ 11);
	
	var _creaturefactory2 = _interopRequireDefault(_creaturefactory);
	
	var _hero = __webpack_require__(/*! ../../components/sprite/hero.js */ 37);
	
	var _hero2 = _interopRequireDefault(_hero);
	
	var _things = __webpack_require__(/*! ../../components/sprite/things.js */ 41);
	
	var _things2 = _interopRequireDefault(_things);
	
	var _portal = __webpack_require__(/*! ../../components/sprite/portal.js */ 42);
	
	var _portal2 = _interopRequireDefault(_portal);
	
	var _group = __webpack_require__(/*! ../../components/sprite/group.js */ 44);
	
	var _group2 = _interopRequireDefault(_group);
	
	var _platform = __webpack_require__(/*! ../../components/sprite/platform.js */ 45);
	
	var _platform2 = _interopRequireDefault(_platform);
	
	var _assetmap = __webpack_require__(/*! ../assetmap.js */ 46);
	
	var _assetmap2 = _interopRequireDefault(_assetmap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var create = function create() {
	
	    // fps debugging
	    this.game.time.advancedTiming = true;
	
	    // [SET LEVEL] set dimensions, start physic system
	    this.game.world.setBounds(0, 0, this.globalConfig.width * this.globalConfig.blocks, this.globalConfig.height);
	
	    this.game.physics.startSystem(Phaser.Physics.ARCADE);
	
	    // [SET LEVEL] load level background, tiles, layers
	    _levelloader2.default.createBackground.call(this, 'backgroundLayer');
	    _levelloader2.default.createTiles.call(this, this.levelConfig.tilemap, this.levelConfig.tileset, this.levelConfig.tilesetImage);
	    _levelloader2.default.createLayers.call(this, this.levelConfig.layers);
	
	    // [SET LEVEL] fix background, resize
	    this.level.backgroundLayer.fixedToCamera = this.levelConfig.fixedBackground;
	    this.level.groundLayer.resizeWorld();
	
	    // [THINGS]
	    this.level.bonuses = new _group2.default(this.game);
	    this.levelConfig.bonus.forEach(function (bonusConfig) {
	        var bonus = new _things2.default(this.game, _assetmap2.default[bonusConfig.img], bonusConfig.x, bonusConfig.y);
	        this.level.bonuses.add(bonus);
	    }.bind(this));
	
	    this.level.portals = new _group2.default(this.game);
	    this.levelConfig.portals.forEach(function (portalConfig) {
	        var portal = new _portal2.default(this.game, portalConfig.jumpTo, portalConfig.x, portalConfig.y);
	        this.level.portals.add(portal);
	    }.bind(this));
	
	    this.level.platforms = new _group2.default(this.game);
	    this.levelConfig.platforms.forEach(function (platformConfig) {
	        var platform = new _platform2.default(this.game, _assetmap2.default[platformConfig.img], platformConfig.x, platformConfig.y, platformConfig);
	        this.level.platforms.add(platform);
	    }.bind(this));
	
	    // [PLAYER]
	    this.player = new _hero2.default(this.game, this.levelConfig.entryPoint.x, this.levelConfig.entryPoint.y, this.globalConfig.textureAtlasName, this.creatureConfig.man);
	
	    this.game.camera.follow(this.player);
	
	    this.player.react = _reactions2.default;
	    this.player.listen(this.eventsOf.keys, this.player.react);
	    this.player.listen(this.eventsOf.level, this.player.react);
	
	    // [CREATURES] spawn enemies
	    _creaturefactory2.default.createEnemyGroup.call(this);
	    this.levelConfig.enemies.forEach(_creaturefactory2.default.create.bind(this));
	
	    // bind keys
	    this.keys = this.game.input.keyboard.createCursorKeys();
	    this.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	
	    // Phaser preserves binding through game states so it needs to be deleted
	    // http://www.html5gamedevs.com/topic/5631-preserve-input-bindings/
	
	    console.log('[PHASER][Play][Create]');
	};
	
	module.exports = create;

/***/ }),
/* 9 */
/*!********************************************!*\
  !*** ./src/gamestates/play/levelloader.js ***!
  \********************************************/
/***/ (function(module, exports) {

	"use strict";
	
	var levelLoader = {
	    createBackground: function createBackground(layerName) {
	        this.level.backgroundLayer = this.game.add.tileSprite(0, 0, this.levelConfig.width, this.levelConfig.height, this.levelConfig.backgroundKey);
	    },
	    createLayer: function createLayer(layer) {
	        this.level[layer] = this.level.tilemap.createLayer(this.levelConfig[layer]);
	    },
	    createLayers: function createLayers(layers) {
	        for (var layer in layers) {
	            this.level[layer] = this.level.tilemap.createLayer(this.levelConfig.layers[layer].key);
	            this.level[layer].visible = this.levelConfig.layers[layer].visible;
	        }
	    },
	    createTiles: function createTiles(tilemapKey, tilesetKey, tilesetImage) {
	        this.level.tilemap = this.game.add.tilemap(tilemapKey);
	        this.level.tilemap.addTilesetImage(tilesetImage, tilesetKey);
	        this.level.tilemap.setCollisionBetween(0, 3000, true, this.levelConfig.layers.collisionLayer.key);
	        this.level.tilemap.setCollisionBetween(0, 3000, true, this.levelConfig.layers.deathLayer.key);
	    }
	};
	
	module.exports = levelLoader;

/***/ }),
/* 10 */
/*!******************************************!*\
  !*** ./src/gamestates/play/reactions.js ***!
  \******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var reactions = function reactions(event) {
	    switch (event.type) {
	        case 'MOVE':
	            onMove.call(this, event);
	            break;
	        case 'HURT':
	            onHurt.call(this, event);
	            break;
	        case 'DIE':
	            onDie.call(this, event);
	            break;
	    }
	};
	
	function onMove(event) {
	    switch (event.key) {
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
	        case 'hit':
	            this.hit();
	            break;
	    }
	}
	
	function onHurt(event) {
	    if (this === event.subject) {
	        this.hurt(event.direction);
	    }
	}
	
	function onDie(event) {
	    // removing event listeners on state shutdown otherwise causing memory leak and GC fails
	    this.game.state.states.Play.eventsOf.keys.remove(this.react, this);
	    this.game.state.states.Play.eventsOf.level.remove(this.react, this);
	    this.game.state.start('GameOver', true, false, { levelNumber: 1 });
	}
	
	module.exports = reactions;

/***/ }),
/* 11 */
/*!************************************************!*\
  !*** ./src/gamestates/play/creaturefactory.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _bat = __webpack_require__(/*! ../../components/sprite/creatures/bat.js */ 12);
	
	var _bat2 = _interopRequireDefault(_bat);
	
	var _bear = __webpack_require__(/*! ../../components/sprite/creatures/bear.js */ 23);
	
	var _bear2 = _interopRequireDefault(_bear);
	
	var _bug = __webpack_require__(/*! ../../components/sprite/creatures/bug.js */ 24);
	
	var _bug2 = _interopRequireDefault(_bug);
	
	var _dino = __webpack_require__(/*! ../../components/sprite/creatures/dino.js */ 25);
	
	var _dino2 = _interopRequireDefault(_dino);
	
	var _dragonfly = __webpack_require__(/*! ../../components/sprite/creatures/dragonfly.js */ 26);
	
	var _dragonfly2 = _interopRequireDefault(_dragonfly);
	
	var _frog = __webpack_require__(/*! ../../components/sprite/creatures/frog.js */ 27);
	
	var _frog2 = _interopRequireDefault(_frog);
	
	var _gorilla = __webpack_require__(/*! ../../components/sprite/creatures/gorilla.js */ 28);
	
	var _gorilla2 = _interopRequireDefault(_gorilla);
	
	var _insect = __webpack_require__(/*! ../../components/sprite/creatures/insect.js */ 29);
	
	var _insect2 = _interopRequireDefault(_insect);
	
	var _jelly = __webpack_require__(/*! ../../components/sprite/creatures/jelly.js */ 30);
	
	var _jelly2 = _interopRequireDefault(_jelly);
	
	var _native = __webpack_require__(/*! ../../components/sprite/creatures/native.js */ 31);
	
	var _native2 = _interopRequireDefault(_native);
	
	var _parrot = __webpack_require__(/*! ../../components/sprite/creatures/parrot.js */ 32);
	
	var _parrot2 = _interopRequireDefault(_parrot);
	
	var _ptero = __webpack_require__(/*! ../../components/sprite/creatures/ptero.js */ 33);
	
	var _ptero2 = _interopRequireDefault(_ptero);
	
	var _spider = __webpack_require__(/*! ../../components/sprite/creatures/spider.js */ 34);
	
	var _spider2 = _interopRequireDefault(_spider);
	
	var _tiger = __webpack_require__(/*! ../../components/sprite/creatures/tiger.js */ 35);
	
	var _tiger2 = _interopRequireDefault(_tiger);
	
	var _turtle = __webpack_require__(/*! ../../components/sprite/creatures/turtle.js */ 36);
	
	var _turtle2 = _interopRequireDefault(_turtle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Creature = {
	    bat: _bat2.default,
	    bear: _bear2.default,
	    bug: _bug2.default,
	    dino: _dino2.default,
	    dragonfly: _dragonfly2.default,
	    frog: _frog2.default,
	    gorilla: _gorilla2.default,
	    insect: _insect2.default,
	    jelly: _jelly2.default,
	    native: _native2.default,
	    parrot: _parrot2.default,
	    ptero: _ptero2.default,
	    spider: _spider2.default,
	    tiger: _tiger2.default,
	    turtle: _turtle2.default
	};
	
	var creatureFactory = {
	    createEnemyGroup: function createEnemyGroup() {
	        this.enemies = new Phaser.Group(this.game);
	    },
	    create: function create(creature) {
	        var enemy = new Creature[creature.type](this.game, creature.origin.x, creature.origin.y, this.globalConfig.textureAtlasName, this.creatureConfig[creature.type]);
	
	        enemy.listen(this.eventsOf.level, enemy.react);
	        enemy.setBounds(creature.boundTo);
	
	        this.enemies.add(enemy);
	    }
	};
	
	module.exports = creatureFactory;

/***/ }),
/* 12 */
/*!************************************************!*\
  !*** ./src/components/sprite/creatures/bat.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bat = function (_AI) {
		_inherits(Bat, _AI);
	
		function Bat(game, x, y, sprite, props) {
			_classCallCheck(this, Bat);
	
			return _possibleConstructorReturn(this, (Bat.__proto__ || Object.getPrototypeOf(Bat)).call(this, game, x, y, sprite, props));
		}
	
		return Bat;
	}(_ai2.default);
	
	exports.default = Bat;

/***/ }),
/* 13 */
/*!*************************************!*\
  !*** ./src/components/sprite/ai.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extendedsprite = __webpack_require__(/*! ./extendedsprite.js */ 14);
	
	var _extendedsprite2 = _interopRequireDefault(_extendedsprite);
	
	var _decide = __webpack_require__(/*! ./behaviours/decide.js */ 18);
	
	var _decide2 = _interopRequireDefault(_decide);
	
	var _move = __webpack_require__(/*! ./behaviours/move.js */ 19);
	
	var _move2 = _interopRequireDefault(_move);
	
	var _turn = __webpack_require__(/*! ./behaviours/turn.js */ 20);
	
	var _turn2 = _interopRequireDefault(_turn);
	
	var _hurt = __webpack_require__(/*! ./behaviours/hurt.js */ 21);
	
	var _hurt2 = _interopRequireDefault(_hurt);
	
	var _boundto = __webpack_require__(/*! ./behaviours/boundto.js */ 22);
	
	var _boundto2 = _interopRequireDefault(_boundto);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	    @Hero
	*/
	
	var AI = function (_ExtendedSprite) {
	    _inherits(AI, _ExtendedSprite);
	
	    function AI(game, x, y, sprite, props) {
	        _classCallCheck(this, AI);
	
	        var _this = _possibleConstructorReturn(this, (AI.__proto__ || Object.getPrototypeOf(AI)).call(this, game, x, y, sprite, props));
	
	        _this.id = _this.constructor.name + '-' + x + '-' + y;
	        return _this;
	    }
	
	    return AI;
	}(_extendedsprite2.default);
	
	// hacky... :(
	
	
	Object.defineProperty(AI.prototype, 'boundTo', {
	    get: function get() {
	        return this._boundTo;
	    },
	    set: function set(bounds) {
	        this._boundTo = bounds;
	    }
	});
	
	AI.prototype = Object.assign(AI.prototype, _decide2.default, _move2.default, _turn2.default, _hurt2.default, _boundto2.default);
	
	exports.default = AI;

/***/ }),
/* 14 */
/*!*************************************************!*\
  !*** ./src/components/sprite/extendedsprite.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _state = __webpack_require__(/*! ./behaviours/state.js */ 15);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _listen = __webpack_require__(/*! ./behaviours/listen.js */ 16);
	
	var _listen2 = _interopRequireDefault(_listen);
	
	var _debug = __webpack_require__(/*! ./behaviours/debug.js */ 17);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	    @ExtendedSprite
	*/
	function ExtendedSprite(game, x, y, sprite, props) {
	    var _this = this;
	
	    console.log(this.constructor.name);
	    this.game = game;
	    this.props = props || { animations: [] };
	
	    Phaser.Sprite.call(this, game, x, y, sprite);
	
	    this.props.animations.forEach(function (animation) {
	        _this.animations.add(animation.name, animation.frames.map(function (frame) {
	            return frame.toString();
	        }), animation.fps, animation.loop);
	    });
	
	    this.state = {
	        'die': 0,
	        'hurt': 0,
	        'hit': 0,
	        'move': 0,
	        'idle': Infinity
	    };
	
	    this.game.add.existing(this);
	    this.game.physics.enable(this, Phaser.Physics.ARCADE);
	    this.body.gravity.y = this.props.gravity;
	    this.anchor.setTo(0.5, 1);
	    this.body.collideWorldBounds = true;
	    this.checkWorldBounds = true;
	    this.outOfBoundsKill = true;
	    this._debugText = this.addChild(this.game.add.text(20, -20, 'debug', { font: "12px Courier", fill: "#ffffff" }));
	    this._debugText.visible = false;
	}
	
	ExtendedSprite.prototype = Object.create(Phaser.Sprite.prototype);
	ExtendedSprite.prototype.constructor = ExtendedSprite;
	
	ExtendedSprite.prototype = Object.assign(ExtendedSprite.prototype, _state2.default, _listen2.default, _debug2.default);
	
	ExtendedSprite.prototype.update = function () {
	    this.animations.play(this.getState());
	};
	
	/*
	    facing right: this.scale.x = 1
	    facing left: this.scale.x = -1
	*/
	Object.defineProperty(ExtendedSprite.prototype, 'facingRight', {
	    get: function get() {
	        return this.scale.x > 0;
	    }
	});
	
	Object.defineProperty(ExtendedSprite.prototype, 'facingLeft', {
	    get: function get() {
	        return this.scale.x < 0;
	    }
	});
	
	exports.default = ExtendedSprite;

/***/ }),
/* 15 */
/*!***************************************************!*\
  !*** ./src/components/sprite/behaviours/state.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var statefulCreature = {
	    /*
	        @setState: set timestamp
	    */
	    setState: function setState(type, time) {
	        if (this.state[type] !== undefined) {
	            // + 200: realistic animation time
	            // + 0: not animating at all as it is already expired while the execution context get there
	            // + 10: minimal 
	            // + 500: too much delayed reaction
	            this.state[type] = this.game.time.now + (time || this.props.timeOf[type] || 200);
	        }
	    },
	    /*
	        @getState
	        @return first state in the priority order which has not yet expired
	    */
	    getState: function getState() {
	        for (var type in this.state) {
	            if (this.game.time.now < this.state[type]) {
	                return type;
	            }
	        }
	        return 'idle';
	    },
	    /*
	        @hasState
	        @return true if state still valid, false if expired, undefined if not found
	    */
	    hasState: function hasState(type) {
	        return this.state[type] !== undefined ? this.state[type] >= this.game.time.now : undefined;
	    }
	};
	
	module.exports = statefulCreature;

/***/ }),
/* 16 */
/*!****************************************************!*\
  !*** ./src/components/sprite/behaviours/listen.js ***!
  \****************************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var listenBehaviour = {
	    listen: function listen(eventSource, callback) {
	        eventSource.add(callback, this);
	    },
	    react: function react(event) {
	        console.log('[%s]: ', this.constructor.name, event);
	    }
	};
	
	module.exports = listenBehaviour;

/***/ }),
/* 17 */
/*!***************************************************!*\
  !*** ./src/components/sprite/behaviours/debug.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var debugBehaviour = {
	   debug: function debug(toDebug) {
	      this._debugText.visible = true;
	      this._debugText.scale.x = this.scale.x;
	      this._debugText.setText(toDebug.toString() || '');
	      return this;
	   }
	};
	
	module.exports = debugBehaviour;

/***/ }),
/* 18 */
/*!****************************************************!*\
  !*** ./src/components/sprite/behaviours/decide.js ***!
  \****************************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var decideBehaviour = {
	    update: function update() {
	        this.animations.play('move');
	        //this.turnIfBlocked();
	        this.checkBounds();
	        this.move();
	    }
	};
	
	module.exports = decideBehaviour;

/***/ }),
/* 19 */
/*!**************************************************!*\
  !*** ./src/components/sprite/behaviours/move.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var moveBehaviour = {
	    moveLeft: function moveLeft() {
	        this.scale.x = -1;
	        this.setState('move');
	        if (this.body.velocity.x > -this.props.maxSpeed) {
	            this.body.velocity.x -= this.props.acceleration;
	        }
	        return this;
	    },
	    moveRight: function moveRight() {
	        this.scale.x = 1;
	        this.setState('move');
	        if (this.body.velocity.x < this.props.maxSpeed) {
	            this.body.velocity.x += this.props.acceleration;
	        }
	        return this;
	    },
	    move: function move() {
	        if (this.scale.x === 1) {
	            this.moveRight();
	        } else {
	            this.moveLeft();
	        }
	    }
	};
	
	module.exports = moveBehaviour;

/***/ }),
/* 20 */
/*!**************************************************!*\
  !*** ./src/components/sprite/behaviours/turn.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	var turnBehaviour = {
	    turnIfBlocked: function turnIfBlocked() {
	        if (this.body.blocked.left || this.body.blocked.right) {
	            this.scale.x *= -1;
	        }
	        return this;
	    },
	    turn: function turn() {
	        this.scale.x *= -1;
	        return this;
	    }
	};
	
	module.exports = turnBehaviour;

/***/ }),
/* 21 */
/*!**************************************************!*\
  !*** ./src/components/sprite/behaviours/hurt.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var hurtBehaviour = {
	    hurt: function hurt(direction) {
	
	        this.setState('hurt');
	
	        this.body.velocity.y -= 100;
	        if (direction && direction.left) {
	            this.body.velocity.x += 50;
	        }
	        if (direction && direction.right) {
	            this.body.velocity.x -= 50;
	        }
	        return this;
	    }
	};
	
	module.exports = hurtBehaviour;

/***/ }),
/* 22 */
/*!*****************************************************!*\
  !*** ./src/components/sprite/behaviours/boundto.js ***!
  \*****************************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var boundToBehaviour = {
	    setBounds: function setBounds(bounds) {
	        if (!bounds || !Object.keys(bounds).length) {
	            return this;
	        }
	
	        // @Point {x, y}
	        if (bounds.hasOwnProperty('x') && bounds.hasOwnProperty('y')) {
	            this.boundTo = new Phaser.Point(bounds.x, bounds.y);
	        }
	
	        // @Rectangle { x1, x2 }
	        if (bounds.hasOwnProperty('x1') && bounds.hasOwnProperty('x2') && !bounds.hasOwnProperty('y1') && !bounds.hasOwnProperty('y2')) {
	            this.boundTo = new Phaser.Rectangle(bounds.x1, 0, bounds.x2 - bounds.x1, this.game.height);
	        }
	
	        // {x1, y1, x2, y2}
	        if (bounds.hasOwnProperty('x1') && bounds.hasOwnProperty('x2') && bounds.hasOwnProperty('y1') && bounds.hasOwnProperty('y2')) {
	            this._boundTo = new Phaser.Rectangle(bounds.x1, bounds.y1, bounds.x2 - bounds.x1, bounds.y2 - bounds.y1);
	        }
	
	        return this;
	    },
	    checkBounds: function checkBounds() {
	        if (!this.boundTo || !Object.keys(this.boundTo).length) {
	            return;
	        }
	
	        // @Point {x, y} 
	        if (!this.boundTo.hasOwnProperty('width') && !Phaser.Rectangle.containsPoint(this.getBounds(), this.boundTo) && (this.x < this.boundTo.x && !this.facingRight || this.x > this.boundTo.x && this.facingRight)) {
	            this.turn();
	        }
	
	        // @Rectangle {x1, x2} or {x1, y1, x2, y2}
	        if (this.boundTo && this.boundTo.hasOwnProperty('width') && (this.x < this.boundTo.x && this.facingLeft || this.x > this.boundTo.x + this.boundTo.width && this.facingRight)) {
	            this.turn();
	        }
	
	        return this;
	    }
	};
	
	module.exports = boundToBehaviour;

/***/ }),
/* 23 */
/*!*************************************************!*\
  !*** ./src/components/sprite/creatures/bear.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bear = function (_AI) {
		_inherits(Bear, _AI);
	
		function Bear(game, x, y, sprite, props) {
			_classCallCheck(this, Bear);
	
			return _possibleConstructorReturn(this, (Bear.__proto__ || Object.getPrototypeOf(Bear)).call(this, game, x, y, sprite, props));
		}
	
		return Bear;
	}(_ai2.default);
	
	exports.default = Bear;

/***/ }),
/* 24 */
/*!************************************************!*\
  !*** ./src/components/sprite/creatures/bug.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bug = function (_AI) {
		_inherits(Bug, _AI);
	
		function Bug(game, x, y, sprite, props) {
			_classCallCheck(this, Bug);
	
			return _possibleConstructorReturn(this, (Bug.__proto__ || Object.getPrototypeOf(Bug)).call(this, game, x, y, sprite, props));
		}
	
		return Bug;
	}(_ai2.default);
	
	exports.default = Bug;

/***/ }),
/* 25 */
/*!*************************************************!*\
  !*** ./src/components/sprite/creatures/dino.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dino = function (_AI) {
		_inherits(Dino, _AI);
	
		function Dino(game, x, y, sprite, props) {
			_classCallCheck(this, Dino);
	
			return _possibleConstructorReturn(this, (Dino.__proto__ || Object.getPrototypeOf(Dino)).call(this, game, x, y, sprite, props));
		}
	
		return Dino;
	}(_ai2.default);
	
	exports.default = Dino;

/***/ }),
/* 26 */
/*!******************************************************!*\
  !*** ./src/components/sprite/creatures/dragonfly.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dragonfly = function (_AI) {
		_inherits(Dragonfly, _AI);
	
		function Dragonfly(game, x, y, sprite, props) {
			_classCallCheck(this, Dragonfly);
	
			return _possibleConstructorReturn(this, (Dragonfly.__proto__ || Object.getPrototypeOf(Dragonfly)).call(this, game, x, y, sprite, props));
		}
	
		return Dragonfly;
	}(_ai2.default);
	
	exports.default = Dragonfly;

/***/ }),
/* 27 */
/*!*************************************************!*\
  !*** ./src/components/sprite/creatures/frog.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Frog = function (_AI) {
		_inherits(Frog, _AI);
	
		function Frog(game, x, y, sprite, props) {
			_classCallCheck(this, Frog);
	
			return _possibleConstructorReturn(this, (Frog.__proto__ || Object.getPrototypeOf(Frog)).call(this, game, x, y, sprite, props));
		}
	
		return Frog;
	}(_ai2.default);
	
	exports.default = Frog;

/***/ }),
/* 28 */
/*!****************************************************!*\
  !*** ./src/components/sprite/creatures/gorilla.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Gorilla = function (_AI) {
		_inherits(Gorilla, _AI);
	
		function Gorilla(game, x, y, sprite, props) {
			_classCallCheck(this, Gorilla);
	
			return _possibleConstructorReturn(this, (Gorilla.__proto__ || Object.getPrototypeOf(Gorilla)).call(this, game, x, y, sprite, props));
		}
	
		return Gorilla;
	}(_ai2.default);
	
	exports.default = Gorilla;

/***/ }),
/* 29 */
/*!***************************************************!*\
  !*** ./src/components/sprite/creatures/insect.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Insect = function (_AI) {
		_inherits(Insect, _AI);
	
		function Insect(game, x, y, sprite, props) {
			_classCallCheck(this, Insect);
	
			return _possibleConstructorReturn(this, (Insect.__proto__ || Object.getPrototypeOf(Insect)).call(this, game, x, y, sprite, props));
		}
	
		return Insect;
	}(_ai2.default);
	
	exports.default = Insect;

/***/ }),
/* 30 */
/*!**************************************************!*\
  !*** ./src/components/sprite/creatures/jelly.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Jelly = function (_AI) {
		_inherits(Jelly, _AI);
	
		function Jelly(game, x, y, sprite, props) {
			_classCallCheck(this, Jelly);
	
			return _possibleConstructorReturn(this, (Jelly.__proto__ || Object.getPrototypeOf(Jelly)).call(this, game, x, y, sprite, props));
		}
	
		return Jelly;
	}(_ai2.default);
	
	exports.default = Jelly;

/***/ }),
/* 31 */
/*!***************************************************!*\
  !*** ./src/components/sprite/creatures/native.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Native = function (_AI) {
		_inherits(Native, _AI);
	
		function Native(game, x, y, sprite, props) {
			_classCallCheck(this, Native);
	
			return _possibleConstructorReturn(this, (Native.__proto__ || Object.getPrototypeOf(Native)).call(this, game, x, y, sprite, props));
		}
	
		return Native;
	}(_ai2.default);
	
	exports.default = Native;

/***/ }),
/* 32 */
/*!***************************************************!*\
  !*** ./src/components/sprite/creatures/parrot.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Parrot = function (_AI) {
		_inherits(Parrot, _AI);
	
		function Parrot(game, x, y, sprite, props) {
			_classCallCheck(this, Parrot);
	
			return _possibleConstructorReturn(this, (Parrot.__proto__ || Object.getPrototypeOf(Parrot)).call(this, game, x, y, sprite, props));
		}
	
		return Parrot;
	}(_ai2.default);
	
	exports.default = Parrot;

/***/ }),
/* 33 */
/*!**************************************************!*\
  !*** ./src/components/sprite/creatures/ptero.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Ptero = function (_AI) {
		_inherits(Ptero, _AI);
	
		function Ptero(game, x, y, sprite, props) {
			_classCallCheck(this, Ptero);
	
			return _possibleConstructorReturn(this, (Ptero.__proto__ || Object.getPrototypeOf(Ptero)).call(this, game, x, y, sprite, props));
		}
	
		return Ptero;
	}(_ai2.default);
	
	exports.default = Ptero;

/***/ }),
/* 34 */
/*!***************************************************!*\
  !*** ./src/components/sprite/creatures/spider.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Spider = function (_AI) {
		_inherits(Spider, _AI);
	
		function Spider(game, x, y, sprite, props) {
			_classCallCheck(this, Spider);
	
			return _possibleConstructorReturn(this, (Spider.__proto__ || Object.getPrototypeOf(Spider)).call(this, game, x, y, sprite, props));
		}
	
		return Spider;
	}(_ai2.default);
	
	exports.default = Spider;

/***/ }),
/* 35 */
/*!**************************************************!*\
  !*** ./src/components/sprite/creatures/tiger.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tiger = function (_AI) {
		_inherits(Tiger, _AI);
	
		function Tiger(game, x, y, sprite, props) {
			_classCallCheck(this, Tiger);
	
			return _possibleConstructorReturn(this, (Tiger.__proto__ || Object.getPrototypeOf(Tiger)).call(this, game, x, y, sprite, props));
		}
	
		return Tiger;
	}(_ai2.default);
	
	exports.default = Tiger;

/***/ }),
/* 36 */
/*!***************************************************!*\
  !*** ./src/components/sprite/creatures/turtle.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ai = __webpack_require__(/*! ../ai.js */ 13);
	
	var _ai2 = _interopRequireDefault(_ai);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Turtle = function (_AI) {
		_inherits(Turtle, _AI);
	
		function Turtle(game, x, y, sprite, props) {
			_classCallCheck(this, Turtle);
	
			return _possibleConstructorReturn(this, (Turtle.__proto__ || Object.getPrototypeOf(Turtle)).call(this, game, x, y, sprite, props));
		}
	
		return Turtle;
	}(_ai2.default);
	
	exports.default = Turtle;

/***/ }),
/* 37 */
/*!***************************************!*\
  !*** ./src/components/sprite/hero.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extendedsprite = __webpack_require__(/*! ./extendedsprite.js */ 14);
	
	var _extendedsprite2 = _interopRequireDefault(_extendedsprite);
	
	var _jump = __webpack_require__(/*! ./behaviours/jump.js */ 38);
	
	var _jump2 = _interopRequireDefault(_jump);
	
	var _stop = __webpack_require__(/*! ./behaviours/stop.js */ 39);
	
	var _stop2 = _interopRequireDefault(_stop);
	
	var _move = __webpack_require__(/*! ./behaviours/move.js */ 19);
	
	var _move2 = _interopRequireDefault(_move);
	
	var _hurt = __webpack_require__(/*! ./behaviours/hurt.js */ 21);
	
	var _hurt2 = _interopRequireDefault(_hurt);
	
	var _hit = __webpack_require__(/*! ./behaviours/hit.js */ 40);
	
	var _hit2 = _interopRequireDefault(_hit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	    @Hero
	*/
	var Hero = function (_ExtendedSprite) {
	    _inherits(Hero, _ExtendedSprite);
	
	    function Hero(game, x, y, sprite, props) {
	        _classCallCheck(this, Hero);
	
	        return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, game, x, y, sprite, props));
	    }
	
	    return Hero;
	}(_extendedsprite2.default);
	
	Hero.prototype = Object.assign(Hero.prototype, _jump2.default, _stop2.default, _move2.default, _hurt2.default, _hit2.default);
	
	exports.default = Hero;

/***/ }),
/* 38 */
/*!**************************************************!*\
  !*** ./src/components/sprite/behaviours/jump.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	var jumpBehaviour = {
	    jump: function jump() {
	        if (this.body.touching.down || this.body.blocked.down) {
	            this.body.velocity.y -= this.props.jumping;
	        }
	        return this;
	    }
	};
	
	module.exports = jumpBehaviour;

/***/ }),
/* 39 */
/*!**************************************************!*\
  !*** ./src/components/sprite/behaviours/stop.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var stopBehaviour = {
	    stop: function stop() {
	        // slippery rate: 1.1, should go later to levelConfig
	        this.body.velocity.x /= 1.1;
	        this.setState('stop');
	        return this;
	    }
	};
	
	module.exports = stopBehaviour;

/***/ }),
/* 40 */
/*!*************************************************!*\
  !*** ./src/components/sprite/behaviours/hit.js ***!
  \*************************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var hitBehaviour = {
	    hit: function hit() {
	        this.setState('hit');
	    }
	};
	
	module.exports = hitBehaviour;

/***/ }),
/* 41 */
/*!*****************************************!*\
  !*** ./src/components/sprite/things.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var Thing = function Thing(game, frameName, x, y, configs) {
	  Phaser.Sprite.call(this, game, x, y, 'pre2atlas');
	  game.physics.enable(this, Phaser.Physics.ARCADE);
	  this.frameName = frameName;
	
	  var pulseDistance = 10 + Math.random() * 5 - Math.random() * 5;
	  this.props = {
	    x: x,
	    y: y,
	    pulseDistance: pulseDistance,
	    pulseVelocity: pulseDistance * 3
	  };
	  this.body.gravity.y = 100;
	  this.allowGravity = true;
	  this.anchor.setTo(0.5, 0.5);
	  game.add.existing(this);
	
	  this.update = function () {
	    this.pulse();
	  };
	};
	
	Thing.prototype = Object.create(Phaser.Sprite.prototype);
	Thing.prototype.constructor = Thing;
	
	Thing.prototype.pulse = function pulse() {
	  if (this.y >= this.props.y + this.props.pulseDistance) {
	    this.body.velocity.y = -this.props.pulseVelocity;
	  }
	  if (this.y < this.props.y) {
	    //this.body.velocity.y = 0;
	  }
	};
	
	module.exports = Thing;

/***/ }),
/* 42 */
/*!*****************************************!*\
  !*** ./src/components/sprite/portal.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _assetMap = __webpack_require__(/*! ../../gamestates/assetMap.js */ 43);
	
	var _assetMap2 = _interopRequireDefault(_assetMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Portal = function Portal(game, jumpTo, x, y) {
	
	  this.jumpTo = jumpTo;
	
	  Phaser.Sprite.call(this, game, x, y, 'pre2atlas');
	  game.physics.enable(this, Phaser.Physics.ARCADE);
	  this.frameName = _assetMap2.default.PORTAL_LEVEL_GO;
	  this.anchor.setTo(0.5, 0.5);
	  game.add.existing(this);
	
	  this.update = function () {};
	};
	
	Portal.prototype = Object.create(Phaser.Sprite.prototype);
	Portal.prototype.constructor = Portal;
	
	module.exports = Portal;

/***/ }),
/* 43 */
/*!************************************!*\
  !*** ./src/gamestates/assetMap.js ***!
  \************************************/
/***/ (function(module, exports) {

	"use strict";
	
	var assetMap = {
	    key0: "0",
	    key1: "1",
	    key2: "2",
	    key3: "3",
	    key4: "4",
	    key5: "5",
	    key6: "6",
	    key7: "7",
	    key8: "8",
	    key9: "9",
	    key10: "10",
	    key11: "11",
	    key12: "12",
	    key13: "13",
	    key14: "14",
	    key15: "15",
	    key16: "16",
	    key17: "17",
	    key18: "18",
	    key19: "19",
	    key20: "20",
	    key21: "21",
	    key22: "22",
	    key23: "23",
	    key24: "24",
	    key25: "25",
	    key26: "26",
	    key27: "27",
	    key28: "28",
	    key29: "29",
	    key30: "30",
	    key31: "31",
	    key32: "32",
	    key33: "33",
	    key34: "34",
	    key35: "35",
	    key36: "36",
	    key37: "37",
	    key38: "38",
	    key39: "39",
	    key40: "40",
	    key41: "41",
	    key42: "42",
	    key43: "43",
	    key44: "44",
	    key45: "45",
	    key46: "46",
	    key47: "47",
	    key48: "48",
	    key49: "49",
	    key50: "50",
	    key51: "51",
	    key52: "52",
	    key53: "53",
	    SCORE_100: "54",
	    key55: "55",
	    SCORE_200: "56",
	    key57: "57",
	    SCORE_300: "58",
	    key59: "59",
	    SCORE_500: "60",
	    key61: "61",
	    key62: "62",
	    SCORE_600: "63",
	    key64: "64",
	    key65: "65",
	    SCORE_700: "66",
	    key67: "67",
	    key68: "68",
	    SCORE_750: "69",
	    key70: "70",
	    key71: "71",
	    SCORE_800: "72",
	    SCORE_1000: "73",
	    key74: "74",
	    key75: "75",
	    SCORE_2000: "76",
	    WEAPON_AXE_SMALL: "77",
	    SCORE_5000: "78",
	    key79: "79",
	    key80: "80",
	    SCORE_8000: "81",
	    key82: "82",
	    key83: "83",
	    key84: "84",
	    key85: "85",
	    key86: "86",
	    key87: "87",
	    SCORE_60000: "88",
	    key89: "89",
	    SCORE_100000: "90",
	    key91: "91",
	    key92: "92",
	    key93: "93",
	    key94: "94",
	    key95: "95",
	    key96: "96",
	    key97: "97",
	    key98: "98",
	    key99: "99",
	    key100: "100",
	    BONUS_BIG_ICECREAM: "101",
	    WEAPON_AXE: "102",
	    BONUS_BIG_BANANA: "103",
	    key104: "104",
	    key105: "105",
	    BONUS_BIG_MCDONALDS: "106",
	    PORTAL_KEY: "107",
	    key108: "108",
	    key109: "109",
	    SCORE_10000: "110",
	    key111: "111",
	    SCORE_20000: "112",
	    key113: "113",
	    key114: "114",
	    SCORE_30000: "115",
	    key116: "116",
	    key117: "117",
	    key118: "118",
	    key119: "119",
	    key120: "120",
	    key121: "121",
	    key122: "122",
	    key123: "123",
	    key124: "124",
	    key125: "125",
	    key126: "126",
	    key127: "127",
	    BONUS_PINEAPPLE: "128",
	    key129: "129",
	    key130: "130",
	    key131: "131",
	    key132: "132",
	    key133: "133",
	    key134: "134",
	    key135: "135",
	    BONUS_FRIDGE: "136",
	    key137: "137",
	    key138: "138",
	    key139: "139",
	    key140: "140",
	    key141: "141",
	    key142: "142",
	    key143: "143",
	    key144: "144",
	    key145: "145",
	    key146: "146",
	    key147: "147",
	    key148: "148",
	    key149: "149",
	    key150: "150",
	    key151: "151",
	    key152: "152",
	    key153: "153",
	    key154: "154",
	    key155: "155",
	    key156: "156",
	    BONUS_CHICKEN: "157",
	    key158: "158",
	    key159: "159",
	    key160: "160",
	    key161: "161",
	    key162: "162",
	    key163: "163",
	    key164: "164",
	    key165: "165",
	    key166: "166",
	    key167: "167",
	    key168: "168",
	    key169: "169",
	    key170: "170",
	    key171: "171",
	    key172: "172",
	    key173: "173",
	    key174: "174",
	    key175: "175",
	    key176: "176",
	    key177: "177",
	    BONUS_SUITCASE: "178",
	    key179: "179",
	    key180: "180",
	    key181: "181",
	    key182: "182",
	    key183: "183",
	    key184: "184",
	    key185: "185",
	    key186: "186",
	    key187: "187",
	    key188: "188",
	    key189: "189",
	    key190: "190",
	    key191: "191",
	    key192: "192",
	    key193: "193",
	    key194: "194",
	    key195: "195",
	    key196: "196",
	    key197: "197",
	    key198: "198",
	    key199: "199",
	    key200: "200",
	    key201: "201",
	    key202: "202",
	    key203: "203",
	    key204: "204",
	    key205: "205",
	    key206: "206",
	    key207: "207",
	    key208: "208",
	    key209: "209",
	    key210: "210",
	    key211: "211",
	    key212: "212",
	    key213: "213",
	    key214: "214",
	    key215: "215",
	    key216: "216",
	    key217: "217",
	    key218: "218",
	    key219: "219",
	    key220: "220",
	    key221: "221",
	    TEXT_SUPER: "222",
	    key223: "223",
	    TEXT_YEAH: "224",
	    key225: "225",
	    key226: "226",
	    PLATFORM_BRIDGE: "227",
	    key228: "228",
	    key229: "229",
	    key230: "230",
	    key231: "231",
	    key232: "232",
	    key233: "233",
	    key234: "234",
	    key235: "235",
	    BONUS_SKULL_BIG: "236",
	    key237: "237",
	    key238: "238",
	    key239: "239",
	    key240: "240",
	    key241: "241",
	    ALPHABET_QUESTION_MARK: "242",
	    ALPHABET_O: "243",
	    ALPHABET_EXCLAMATION_MARK: "244",
	    key245: "245",
	    ALPHABET_A: "246",
	    ALPHABET_P: "247",
	    ALPHABET_DOT: "248",
	    ALPHABET_B: "249",
	    ALPHABET_Q: "250",
	    ALPHABET_COMMA: "251",
	    ALPHABET_C: "252",
	    ALPHABET_R: "253",
	    key254: "254",
	    ALPHABET_D: "255",
	    ALPHABET_S: "256",
	    ALPHABET_E: "257",
	    ALPHABET_T: "258",
	    ALPHABET_U: "259",
	    ALPHABET_F: "260",
	    ALPHABET_G: "261",
	    ALPHABET_V: "262",
	    ALPHABET_H: "263",
	    ALPHABET_W: "264",
	    ALPHABET_I: "265",
	    ALPHABET_J: "266",
	    ALPHABET_Y: "267",
	    ALPHABET_K: "268",
	    ALPHABET_Z: "269",
	    ALPHABET_L: "270",
	    key271: "271",
	    key272: "272",
	    key273: "273",
	    ALPHABET_M: "274",
	    ALPHABET_COLON: "275",
	    NUMBER_0: "276",
	    key277: "277",
	    key278: "278",
	    key279: "279",
	    key280: "280",
	    PORTAL_SMALL_GO: "281",
	    PORTAL_SMALL_STOP: "282",
	    TEXT_PASS: "283",
	    PLATFORM_ICE: "284",
	    NUMBER_1: "285",
	    NUMBER_2: "286",
	    key287: "287",
	    NUMBER_3: "288",
	    key289: "289",
	    NUMBER_4: "290",
	    key291: "291",
	    key292: "292",
	    key293: "293",
	    NUMBER_5: "294",
	    key295: "295",
	    PLATFORM_ICE_BIG: "296",
	    NUMBER_7: "297",
	    PLATFORM_WOOD: "298",
	    key299: "299",
	    NUMBER_8: "300",
	    key301: "301",
	    key302: "302",
	    NUMBER_9: "303",
	    PLATFORM_DEATH: "304",
	    key305: "305",
	    key306: "306",
	    key307: "307",
	    PORTAL_LEVEL_STOP: "308",
	    key309: "309",
	    PORTAL_LEVEL_GO: "310",
	    key311: "311",
	    key312: "312",
	    key313: "313",
	    key314: "314",
	    PORTAL_LEVEL_GENERAL: "315",
	    key316: "316",
	    key317: "317",
	    key318: "318",
	    key319: "319",
	    key320: "320",
	    key321: "321",
	    key322: "322",
	    key323: "323",
	    key324: "324",
	    key325: "325",
	    key326: "326",
	    key327: "327",
	    key328: "328",
	    key329: "329",
	    key330: "330",
	    key331: "331",
	    key332: "332",
	    key333: "333",
	    key334: "334",
	    key335: "335",
	    key336: "336",
	    key337: "337",
	    key338: "338",
	    key339: "339",
	    key340: "340",
	    key341: "341",
	    key342: "342",
	    key343: "343",
	    key344: "344",
	    key345: "345",
	    key346: "346",
	    key347: "347",
	    key348: "348",
	    key349: "349",
	    key350: "350",
	    key351: "351",
	    key352: "352",
	    key353: "353",
	    key354: "354",
	    key355: "355",
	    key356: "356",
	    key357: "357",
	    key358: "358",
	    key359: "359",
	    key360: "360",
	    key361: "361",
	    key362: "362",
	    key363: "363",
	    key364: "364",
	    key365: "365",
	    key366: "366",
	    key367: "367",
	    key368: "368",
	    key369: "369",
	    key370: "370",
	    key371: "371",
	    key372: "372",
	    key373: "373",
	    key374: "374",
	    key375: "375",
	    key376: "376",
	    key377: "377",
	    key378: "378",
	    key379: "379",
	    key380: "380",
	    key381: "381",
	    key382: "382",
	    key383: "383",
	    key384: "384",
	    key385: "385",
	    key386: "386",
	    key387: "387",
	    key388: "388",
	    key389: "389",
	    key390: "390",
	    key391: "391",
	    key392: "392",
	    key393: "393",
	    key394: "394",
	    key395: "395",
	    key396: "396",
	    key397: "397",
	    key398: "398",
	    key399: "399",
	    key400: "400",
	    key401: "401",
	    key402: "402",
	    key403: "403",
	    key404: "404",
	    key405: "405",
	    key406: "406",
	    key407: "407",
	    key408: "408",
	    key409: "409",
	    key410: "410",
	    key411: "411",
	    key412: "412",
	    key413: "413",
	    key414: "414",
	    key415: "415",
	    key416: "416",
	    key417: "417",
	    key418: "418",
	    key419: "419",
	    key420: "420",
	    key421: "421",
	    key422: "422",
	    key423: "423",
	    key424: "424",
	    key425: "425",
	    key426: "426",
	    key427: "427",
	    key428: "428",
	    key429: "429",
	    key430: "430",
	    key431: "431",
	    key432: "432",
	    key433: "433",
	    key434: "434",
	    key435: "435",
	    key436: "436",
	    key437: "437",
	    key438: "438",
	    key439: "439",
	    key440: "440",
	    key441: "441",
	    key442: "442",
	    key443: "443",
	    key444: "444",
	    key445: "445",
	    key446: "446",
	    key447: "447",
	    key448: "448",
	    key449: "449",
	    key450: "450",
	    key451: "451",
	    key452: "452",
	    key453: "453",
	    key454: "454",
	    key455: "455",
	    key456: "456",
	    key457: "457",
	    key458: "458",
	    key459: "459",
	    key460: "460",
	    key461: "461",
	    key462: "462",
	    key463: "463",
	    key464: "464",
	    key465: "465",
	    key466: "466",
	    ALPHABET_N: "467",
	    NUMBER_6: "468",
	    ALPHABET_X: "469",
	    key470: "470"
	};
	
	module.exports = assetMap;

/***/ }),
/* 44 */
/*!****************************************!*\
  !*** ./src/components/sprite/group.js ***!
  \****************************************/
/***/ (function(module, exports) {

	"use strict";
	
	function Group(game, props) {
	    Phaser.Group.call(this, game);
	    this.props = props || {};
	}
	
	Group.prototype = Object.create(Phaser.Group.prototype);
	Group.prototype.constructor = Group;
	
	module.exports = Group;

/***/ }),
/* 45 */
/*!*******************************************!*\
  !*** ./src/components/sprite/platform.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var Platform = function Platform(game, platformImage, x, y, props) {
	  Phaser.Sprite.call(this, game, x, y, 'pre2atlas');
	  game.physics.enable(this, Phaser.Physics.ARCADE);
	
	  this.frameName = platformImage;
	  this.props = props;
	
	  this.stepped = {
	    on: false,
	    prev: false
	  };
	
	  this.props.prevPosition = {
	    x: this.x,
	    y: this.y,
	    dx: 0,
	    dy: 0
	  };
	
	  this.body.gravity.y = 500;
	  this.body.immovable = true;
	  this.body.moves = false;
	  this.anchor.setTo(0.5, 0.5);
	  game.add.existing(this);
	
	  if (this.props.behaviour === 'shuttle') {
	    this.shuttle({
	      x: this.props.moveTo.x,
	      y: this.props.moveTo.y
	    }, {
	      x: this.props.x,
	      y: this.props.y
	    }, this.props.moveTo.timeout, Phaser.Easing[this.props.moveTo.easing].InOut);
	  }
	
	  this.update = function () {
	    // tweening object doesnt have body.velocity so we have to manually calculate:
	    this.props.prevPosition.dx = this.x - this.props.prevPosition.x;
	    this.props.prevPosition.dy = this.y - this.props.prevPosition.y;
	    this.props.prevPosition.x = this.x;
	    this.props.prevPosition.y = this.y;
	
	    // one-off step-on step-off 'events' !== onStand
	    if (this.stepped.on && !this.stepped.prev) {
	      this.onSteppedOn();
	    }
	    if (!this.stepped.on && this.stepped.prev) {
	      this.onSteppedOff();
	    }
	  };
	};
	
	Platform.prototype = Object.create(Phaser.Sprite.prototype);
	Platform.prototype.constructor = Platform;
	
	Platform.prototype.onSteppedOn = function onSteppedOn(stander, platform) {
	  if (this.props.behaviour === 'moveTo') {
	    this.props.tween1 = this.moveTo({
	      x: this.props.moveTo.x || this.x,
	      y: this.props.moveTo.y || this.y
	    }, this.props.moveTo.timeout, Phaser.Easing[this.props.moveTo.easing].InOut);
	  }
	
	  if (this.props.behaviour === 'fall') {
	    this.game.time.events.add(Phaser.Timer.SECOND * this.props.fallTimeout * 0.001, function () {
	      this.fall();
	    }, this);
	    this.game.time.events.add(Phaser.Timer.SECOND * this.props.restoreTimeout * 0.001, function () {
	      this.restore();
	    }, this);
	  }
	};
	
	Platform.prototype.onSteppedOff = function onSteppedOff(stander, platform) {};
	
	Platform.prototype.onStand = function onStand(stander, platform) {
	  // corrigation of standing sprite: if not, the platform move out of his feet
	  // stander.x = platform.x is not good enough, creates sticky platform
	  stander.x += platform.props.prevPosition.dx;
	  stander.y += platform.props.prevPosition.dy;
	};
	
	Platform.prototype.fall = function fall() {
	  this.immovable = false;
	  this.body.moves = true;
	  this.allowGravity = true;
	};
	
	Platform.prototype.restore = function restore() {
	  this.immovable = true;
	  this.body.moves = false;
	  this.allowGravity = false;
	  this.game.add.tween(this).to({
	    x: this.props.x,
	    y: this.props.y
	  }, 1000, Phaser.Easing.Linear.In);
	};
	
	Platform.prototype.moveTo = function moveTo(tweenTo, timeout, easing) {
	  this.game.add.tween(this).to(tweenTo, timeout, easing);
	};
	
	Platform.prototype.shuttle = function shuttle(tween1, tween2, timeout, easing) {
	  this.props.tween1 = this.game.add.tween(this).to(tween1, timeout, easing);
	  this.props.tween2 = this.game.add.tween(this).to(tween2, timeout, easing);
	
	  this.props.tween1.chain(this.props.tween2);
	  this.props.tween2.chain(this.props.tween1);
	  this.props.tween1.start();
	};
	
	module.exports = Platform;

/***/ }),
/* 46 */
/*!************************************!*\
  !*** ./src/gamestates/assetmap.js ***!
  \************************************/
/***/ (function(module, exports) {

	"use strict";
	
	var assetMap = {
	    key0: "0",
	    key1: "1",
	    key2: "2",
	    key3: "3",
	    key4: "4",
	    key5: "5",
	    key6: "6",
	    key7: "7",
	    key8: "8",
	    key9: "9",
	    key10: "10",
	    key11: "11",
	    key12: "12",
	    key13: "13",
	    key14: "14",
	    key15: "15",
	    key16: "16",
	    key17: "17",
	    key18: "18",
	    key19: "19",
	    key20: "20",
	    key21: "21",
	    key22: "22",
	    key23: "23",
	    key24: "24",
	    key25: "25",
	    key26: "26",
	    key27: "27",
	    key28: "28",
	    key29: "29",
	    key30: "30",
	    key31: "31",
	    key32: "32",
	    key33: "33",
	    key34: "34",
	    key35: "35",
	    key36: "36",
	    key37: "37",
	    key38: "38",
	    key39: "39",
	    key40: "40",
	    key41: "41",
	    key42: "42",
	    key43: "43",
	    key44: "44",
	    key45: "45",
	    key46: "46",
	    key47: "47",
	    key48: "48",
	    key49: "49",
	    key50: "50",
	    key51: "51",
	    key52: "52",
	    key53: "53",
	    SCORE_100: "54",
	    key55: "55",
	    SCORE_200: "56",
	    key57: "57",
	    SCORE_300: "58",
	    key59: "59",
	    SCORE_500: "60",
	    key61: "61",
	    key62: "62",
	    SCORE_600: "63",
	    key64: "64",
	    key65: "65",
	    SCORE_700: "66",
	    key67: "67",
	    key68: "68",
	    SCORE_750: "69",
	    key70: "70",
	    key71: "71",
	    SCORE_800: "72",
	    SCORE_1000: "73",
	    key74: "74",
	    key75: "75",
	    SCORE_2000: "76",
	    WEAPON_AXE_SMALL: "77",
	    SCORE_5000: "78",
	    key79: "79",
	    key80: "80",
	    SCORE_8000: "81",
	    key82: "82",
	    key83: "83",
	    key84: "84",
	    key85: "85",
	    key86: "86",
	    key87: "87",
	    SCORE_60000: "88",
	    key89: "89",
	    SCORE_100000: "90",
	    key91: "91",
	    key92: "92",
	    key93: "93",
	    key94: "94",
	    key95: "95",
	    key96: "96",
	    key97: "97",
	    key98: "98",
	    key99: "99",
	    key100: "100",
	    BONUS_BIG_ICECREAM: "101",
	    WEAPON_AXE: "102",
	    BONUS_BIG_BANANA: "103",
	    key104: "104",
	    key105: "105",
	    BONUS_BIG_MCDONALDS: "106",
	    PORTAL_KEY: "107",
	    key108: "108",
	    key109: "109",
	    SCORE_10000: "110",
	    key111: "111",
	    SCORE_20000: "112",
	    key113: "113",
	    key114: "114",
	    SCORE_30000: "115",
	    key116: "116",
	    key117: "117",
	    key118: "118",
	    key119: "119",
	    key120: "120",
	    key121: "121",
	    key122: "122",
	    key123: "123",
	    key124: "124",
	    key125: "125",
	    key126: "126",
	    key127: "127",
	    BONUS_PINEAPPLE: "128",
	    key129: "129",
	    key130: "130",
	    key131: "131",
	    key132: "132",
	    key133: "133",
	    key134: "134",
	    key135: "135",
	    BONUS_FRIDGE: "136",
	    key137: "137",
	    key138: "138",
	    key139: "139",
	    key140: "140",
	    key141: "141",
	    key142: "142",
	    key143: "143",
	    key144: "144",
	    key145: "145",
	    key146: "146",
	    key147: "147",
	    key148: "148",
	    key149: "149",
	    key150: "150",
	    key151: "151",
	    key152: "152",
	    key153: "153",
	    key154: "154",
	    key155: "155",
	    key156: "156",
	    BONUS_CHICKEN: "157",
	    key158: "158",
	    key159: "159",
	    key160: "160",
	    key161: "161",
	    key162: "162",
	    key163: "163",
	    key164: "164",
	    key165: "165",
	    key166: "166",
	    key167: "167",
	    key168: "168",
	    key169: "169",
	    key170: "170",
	    key171: "171",
	    key172: "172",
	    key173: "173",
	    key174: "174",
	    key175: "175",
	    key176: "176",
	    key177: "177",
	    BONUS_SUITCASE: "178",
	    key179: "179",
	    key180: "180",
	    key181: "181",
	    key182: "182",
	    key183: "183",
	    key184: "184",
	    key185: "185",
	    key186: "186",
	    key187: "187",
	    key188: "188",
	    key189: "189",
	    key190: "190",
	    key191: "191",
	    key192: "192",
	    key193: "193",
	    key194: "194",
	    key195: "195",
	    key196: "196",
	    key197: "197",
	    key198: "198",
	    key199: "199",
	    key200: "200",
	    key201: "201",
	    key202: "202",
	    key203: "203",
	    key204: "204",
	    key205: "205",
	    key206: "206",
	    key207: "207",
	    key208: "208",
	    key209: "209",
	    key210: "210",
	    key211: "211",
	    key212: "212",
	    key213: "213",
	    key214: "214",
	    key215: "215",
	    key216: "216",
	    key217: "217",
	    key218: "218",
	    key219: "219",
	    key220: "220",
	    key221: "221",
	    TEXT_SUPER: "222",
	    key223: "223",
	    TEXT_YEAH: "224",
	    key225: "225",
	    key226: "226",
	    PLATFORM_BRIDGE: "227",
	    key228: "228",
	    key229: "229",
	    key230: "230",
	    key231: "231",
	    key232: "232",
	    key233: "233",
	    key234: "234",
	    key235: "235",
	    BONUS_SKULL_BIG: "236",
	    key237: "237",
	    key238: "238",
	    key239: "239",
	    key240: "240",
	    key241: "241",
	    ALPHABET_QUESTION_MARK: "242",
	    ALPHABET_O: "243",
	    ALPHABET_EXCLAMATION_MARK: "244",
	    key245: "245",
	    ALPHABET_A: "246",
	    ALPHABET_P: "247",
	    ALPHABET_DOT: "248",
	    ALPHABET_B: "249",
	    ALPHABET_Q: "250",
	    ALPHABET_COMMA: "251",
	    ALPHABET_C: "252",
	    ALPHABET_R: "253",
	    key254: "254",
	    ALPHABET_D: "255",
	    ALPHABET_S: "256",
	    ALPHABET_E: "257",
	    ALPHABET_T: "258",
	    ALPHABET_U: "259",
	    ALPHABET_F: "260",
	    ALPHABET_G: "261",
	    ALPHABET_V: "262",
	    ALPHABET_H: "263",
	    ALPHABET_W: "264",
	    ALPHABET_I: "265",
	    ALPHABET_J: "266",
	    ALPHABET_Y: "267",
	    ALPHABET_K: "268",
	    ALPHABET_Z: "269",
	    ALPHABET_L: "270",
	    key271: "271",
	    key272: "272",
	    key273: "273",
	    ALPHABET_M: "274",
	    ALPHABET_COLON: "275",
	    NUMBER_0: "276",
	    key277: "277",
	    key278: "278",
	    key279: "279",
	    key280: "280",
	    PORTAL_SMALL_GO: "281",
	    PORTAL_SMALL_STOP: "282",
	    TEXT_PASS: "283",
	    PLATFORM_ICE: "284",
	    NUMBER_1: "285",
	    NUMBER_2: "286",
	    key287: "287",
	    NUMBER_3: "288",
	    key289: "289",
	    NUMBER_4: "290",
	    key291: "291",
	    key292: "292",
	    key293: "293",
	    NUMBER_5: "294",
	    key295: "295",
	    PLATFORM_ICE_BIG: "296",
	    NUMBER_7: "297",
	    PLATFORM_WOOD: "298",
	    key299: "299",
	    NUMBER_8: "300",
	    key301: "301",
	    key302: "302",
	    NUMBER_9: "303",
	    PLATFORM_DEATH: "304",
	    key305: "305",
	    key306: "306",
	    key307: "307",
	    PORTAL_LEVEL_STOP: "308",
	    key309: "309",
	    PORTAL_LEVEL_GO: "310",
	    key311: "311",
	    key312: "312",
	    key313: "313",
	    key314: "314",
	    PORTAL_LEVEL_GENERAL: "315",
	    key316: "316",
	    key317: "317",
	    key318: "318",
	    key319: "319",
	    key320: "320",
	    key321: "321",
	    key322: "322",
	    key323: "323",
	    key324: "324",
	    key325: "325",
	    key326: "326",
	    key327: "327",
	    key328: "328",
	    key329: "329",
	    key330: "330",
	    key331: "331",
	    key332: "332",
	    key333: "333",
	    key334: "334",
	    key335: "335",
	    key336: "336",
	    key337: "337",
	    key338: "338",
	    key339: "339",
	    key340: "340",
	    key341: "341",
	    key342: "342",
	    key343: "343",
	    key344: "344",
	    key345: "345",
	    key346: "346",
	    key347: "347",
	    key348: "348",
	    key349: "349",
	    key350: "350",
	    key351: "351",
	    key352: "352",
	    key353: "353",
	    key354: "354",
	    key355: "355",
	    key356: "356",
	    key357: "357",
	    key358: "358",
	    key359: "359",
	    key360: "360",
	    key361: "361",
	    key362: "362",
	    key363: "363",
	    key364: "364",
	    key365: "365",
	    key366: "366",
	    key367: "367",
	    key368: "368",
	    key369: "369",
	    key370: "370",
	    key371: "371",
	    key372: "372",
	    key373: "373",
	    key374: "374",
	    key375: "375",
	    key376: "376",
	    key377: "377",
	    key378: "378",
	    key379: "379",
	    key380: "380",
	    key381: "381",
	    key382: "382",
	    key383: "383",
	    key384: "384",
	    key385: "385",
	    key386: "386",
	    key387: "387",
	    key388: "388",
	    key389: "389",
	    key390: "390",
	    key391: "391",
	    key392: "392",
	    key393: "393",
	    key394: "394",
	    key395: "395",
	    key396: "396",
	    key397: "397",
	    key398: "398",
	    key399: "399",
	    key400: "400",
	    key401: "401",
	    key402: "402",
	    key403: "403",
	    key404: "404",
	    key405: "405",
	    key406: "406",
	    key407: "407",
	    key408: "408",
	    key409: "409",
	    key410: "410",
	    key411: "411",
	    key412: "412",
	    key413: "413",
	    key414: "414",
	    key415: "415",
	    key416: "416",
	    key417: "417",
	    key418: "418",
	    key419: "419",
	    key420: "420",
	    key421: "421",
	    key422: "422",
	    key423: "423",
	    key424: "424",
	    key425: "425",
	    key426: "426",
	    key427: "427",
	    key428: "428",
	    key429: "429",
	    key430: "430",
	    key431: "431",
	    key432: "432",
	    key433: "433",
	    key434: "434",
	    key435: "435",
	    key436: "436",
	    key437: "437",
	    key438: "438",
	    key439: "439",
	    key440: "440",
	    key441: "441",
	    key442: "442",
	    key443: "443",
	    key444: "444",
	    key445: "445",
	    key446: "446",
	    key447: "447",
	    key448: "448",
	    key449: "449",
	    key450: "450",
	    key451: "451",
	    key452: "452",
	    key453: "453",
	    key454: "454",
	    key455: "455",
	    key456: "456",
	    key457: "457",
	    key458: "458",
	    key459: "459",
	    key460: "460",
	    key461: "461",
	    key462: "462",
	    key463: "463",
	    key464: "464",
	    key465: "465",
	    key466: "466",
	    ALPHABET_N: "467",
	    NUMBER_6: "468",
	    ALPHABET_X: "469",
	    key470: "470"
	};
	
	module.exports = assetMap;

/***/ }),
/* 47 */
/*!***************************************!*\
  !*** ./src/gamestates/play/update.js ***!
  \***************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var update = function update() {
	
	    // console.log('[PHASER][Play][Update]');
	
	    // [DEBUG] fps 
	    this.game.debug.text(this.game.time.fps, 5, 20);
	
	    // [COLLISIONS]
	    this.game.physics.arcade.collide(this.player, this.level.collisionLayer);
	
	    this.game.physics.arcade.collide(this.enemies, this.level.collisionLayer);
	
	    this.game.physics.arcade.collide(this.player, this.level.deathLayer, function () {
	        this.eventsOf.level.dispatch({ type: 'DIE' });
	    }.bind(this));
	
	    this.game.physics.arcade.collide(this.player, this.enemies, function (player, enemy) {
	
	        this.game.camera.shake(0.003, 500, true, Phaser.Camera.VERTICAL, true);
	        if (this.player.hasState('hit')) {
	            this.eventsOf.level.dispatch({
	                type: 'HURT',
	                subject: enemy.id,
	                direction: enemy.body.touching
	            });
	        } else {
	            this.eventsOf.level.dispatch({
	                type: 'HURT',
	                subject: this.player,
	                direction: this.player.body.touching
	            });
	        }
	    }.bind(this));
	
	    this.level.portals.forEach(function (portal) {
	        this.game.physics.arcade.collide(this.player, portal, function () {
	            fetch('/api/levels/' + portal.jumpTo, {
	                method: 'get'
	            }).then(function (response) {
	                return response.json();
	            }).then(function (levelconfig) {
	                this.game.state.start('Play', true, true, levelconfig);
	            }.bind(this));
	        }, null, this);
	    }.bind(this));
	
	    /*
	    debugEnemies.call(this, function(){
	        return this.facingRight;
	    });
	    */
	
	    // [KEYPRESS] event dispatch
	    handleKeypress.call(this);
	};
	
	function handleKeypress() {
	    if (this.player.hasState('hurt')) {
	        return;
	    }
	    if (this.keys.left.isDown) {
	        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'left' });
	    } else if (this.keys.right.isDown) {
	        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'right' });
	    } else {
	        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'stop' });
	    }
	
	    if (this.keys.up.isDown) {
	        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'up' });
	    }
	
	    if (this.keys.space.isDown) {
	        this.eventsOf.keys.dispatch({ type: 'MOVE', key: 'hit' });
	    }
	}
	
	function debugEnemies(debugCallback) {
	    this.enemies.forEachAlive(function (enemy) {
	        enemy.debug(debugCallback.call(enemy));
	    });
	}
	
	module.exports = update;

/***/ }),
/* 48 */
/*!**********************************************!*\
  !*** ./src/gamestates/play/eventemitters.js ***!
  \**********************************************/
/***/ (function(module, exports) {

	"use strict";
	
	var eventEmitters = {
	    eventsOf: {
	        keys: new Phaser.Signal(),
	        level: new Phaser.Signal()
	    }
	};
	
	module.exports = eventEmitters;

/***/ }),
/* 49 */
/*!*********************************************!*\
  !*** ./src/gamestates/gameover/gameover.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var GameState = __webpack_require__(/*! ../../components/gamestate/gamestate.js */ 3);
	var create = __webpack_require__(/*! ./create.js */ 50);
	var update = __webpack_require__(/*! ./update.js */ 51);
	
	/*
	    @GameOver
	    inherits from GameState component
	*/
	function GameOver(globalConfig) {
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

/***/ }),
/* 50 */
/*!*******************************************!*\
  !*** ./src/gamestates/gameover/create.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	"use strict";
	
	var create = function create() {
	
	    // fps debugging
	    this.game.time.advancedTiming = true;
	
	    // CTA text
	    var text = this.game.add.text(this.globalConfig.width / 2, this.globalConfig.height / 2, "Game Over\nPress space \nto continue", { font: "48px Courier", fill: "#ffffff", align: "center" });
	
	    text.anchor.set(0.5);
	
	    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    spaceKey.onDown.addOnce(function () {
	        this.game.state.start('Menu', true, true);
	    }, this);
	
	    console.log('[PHASER][GameOver][Create]');
	};
	
	module.exports = create;

/***/ }),
/* 51 */
/*!*******************************************!*\
  !*** ./src/gamestates/gameover/update.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var update = function update() {
	
	    // fps 
	    this.game.debug.text(this.game.time.fps, 5, 20);
	
	    console.log('[PHASER][GameOver][Update]');
	};
	
	module.exports = update;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map