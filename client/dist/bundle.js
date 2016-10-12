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

	var globalConfigs = __webpack_require__(/*! ./globalconfigs.js */ 1);
	var Play = __webpack_require__(/*! ./gamestates/play/play.js */ 2);
	var Menu = __webpack_require__(/*! ./gamestates/menu/menu.js */ 8);
	
	var game = new Phaser.Game(
	    globalConfigs.WIDTH, 
	    globalConfigs.HEIGHT, 
	    globalConfigs.AUTO, 
	    globalConfigs.DOM_ELEMENT
	);
	
	game.state.add('Menu', Menu);
	game.state.add('Play', Play);
	
	game.state.start('Menu', true, true, { 
	    initialConfig: 'some initial state'
	});

/***/ },
/* 1 */
/*!*************************************!*\
  !*** ./client/src/globalconfigs.js ***!
  \*************************************/
/***/ function(module, exports) {

	var configs = {
	    WIDTH: 500,
	    HEIGHT: 500,
	    DOM_ELEMENT: 'app'
	};
	
	module.exports = configs;

/***/ },
/* 2 */
/*!********************************************!*\
  !*** ./client/src/gamestates/play/play.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var GameState = __webpack_require__(/*! ../../components/gamestate/gamestate.js */ 3);
	var init = __webpack_require__(/*! ./init.js */ 4);
	var preload = __webpack_require__(/*! ./preload.js */ 5);
	var create = __webpack_require__(/*! ./create.js */ 6);
	var update = __webpack_require__(/*! ./update.js */ 7);
	
	/*
	    @Play
	    inherits from GameState component
	*/
	function Play(){
	    GameState.call(this);    
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
	
	module.exports = Play;


/***/ },
/* 3 */
/*!******************************************************!*\
  !*** ./client/src/components/gamestate/gamestate.js ***!
  \******************************************************/
/***/ function(module, exports) {

	function GameState(){
	    this.keys;
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
/*!********************************************!*\
  !*** ./client/src/gamestates/play/init.js ***!
  \********************************************/
/***/ function(module, exports) {

	var init = function(configs){
	    console.log('[PHASER][Play][Init]', configs);
	};
	
	module.exports = init;

/***/ },
/* 5 */
/*!***********************************************!*\
  !*** ./client/src/gamestates/play/preload.js ***!
  \***********************************************/
/***/ function(module, exports) {

	var preload = function(){
	    console.log('[PHASER][Play][Preload]');
	};
	
	module.exports = preload;

/***/ },
/* 6 */
/*!**********************************************!*\
  !*** ./client/src/gamestates/play/create.js ***!
  \**********************************************/
/***/ function(module, exports) {

	var create = function(){
	    
	    this.keys = this.game.input.keyboard.createCursorKeys();
	    this.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    
	    console.log('[PHASER][Play][Create]');
	};
	
	module.exports = create;

/***/ },
/* 7 */
/*!**********************************************!*\
  !*** ./client/src/gamestates/play/update.js ***!
  \**********************************************/
/***/ function(module, exports) {

	var update = function(){
	    
	    if(this.keys.left.isDown){
	        console.log('[PHASER] KEYS left');
	    }
	    if(this.keys.right.isDown){
	        console.log('[PHASER] KEYS right');
	    }
	    if(this.keys.up.isDown){
	        console.log('[PHASER] KEYS up');
	    }
	    if(this.keys.down.isDown){
	        console.log('[PHASER] KEYS down');
	    }
	    if(this.keys.space.isDown){
	        console.log('[PHASER] KEYS space');
	    }
	    
	    console.log('[PHASER][Play][Update]');
	};
	
	module.exports = update;

/***/ },
/* 8 */
/*!********************************************!*\
  !*** ./client/src/gamestates/menu/menu.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var GameState = __webpack_require__(/*! ../../components/gamestate/gamestate.js */ 3);
	var create = __webpack_require__(/*! ./create.js */ 9);
	var update = __webpack_require__(/*! ./update.js */ 10);
	
	/*
	    @Menu
	    inherits from GameState component
	*/
	function Menu(){
	    GameState.call(this);    
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
/* 9 */
/*!**********************************************!*\
  !*** ./client/src/gamestates/menu/create.js ***!
  \**********************************************/
/***/ function(module, exports) {

	var create = function(){
	    
	    var style = { font: "48px Helvetica", fill: "#ffffff", align: "center" };
	
	    var text = this.game.add.text(
	        this.game.world.centerX, 
	        this.game.world.centerY, 
	        "Press a key to continue", 
	        style
	    );
	
	    text.anchor.set(0.5);
	    
	    this.keys = this.game.input.keyboard.createCursorKeys();
	    this.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    
	    console.log('[PHASER][Menu][Create]');
	};
	
	module.exports = create;

/***/ },
/* 10 */
/*!**********************************************!*\
  !*** ./client/src/gamestates/menu/update.js ***!
  \**********************************************/
/***/ function(module, exports) {

	var update = function(){
	    
	    this.game.input.keyboard.onDownCallback = function(event){
	        this.game.state.start('Play', true, true, { 
	            level: event.key
	        });
	    };
	    console.log('[PHASER][Menu][Update]');
	};
	
	module.exports = update;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map