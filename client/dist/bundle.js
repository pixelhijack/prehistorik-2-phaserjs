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

	var globalConfigs = __webpack_require__(/*! ./globalconfigs.js */ 6);
	var Play = __webpack_require__(/*! ./gamestates/play/play.js */ 7);
	
	var game = new Phaser.Game(
	    globalConfigs.WIDTH, 
	    globalConfigs.HEIGHT, 
	    globalConfigs.AUTO, 
	    globalConfigs.DOM_ELEMENT
	);
	
	game.state.add('Game', Play);
	
	game.state.start('Game', true, true, { 
	    initialConfig: 'some initial state'
	});

/***/ },
/* 1 */
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
/* 2 */
/*!********************************************!*\
  !*** ./client/src/gamestates/play/init.js ***!
  \********************************************/
/***/ function(module, exports) {

	var init = function(configs){
	    console.log('[PHASER][Play][Init]', configs);
	};
	
	module.exports = init;

/***/ },
/* 3 */
/*!***********************************************!*\
  !*** ./client/src/gamestates/play/preload.js ***!
  \***********************************************/
/***/ function(module, exports) {

	var preload = function(){
	    console.log('[PHASER][Play][Preload]');
	};
	
	module.exports = preload;

/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
/*!*************************************!*\
  !*** ./client/src/globalconfigs.js ***!
  \*************************************/
/***/ function(module, exports) {

	var configs = {
	    WIDTH: 1000,
	    HEIGHT: 1000,
	    DOM_ELEMENT: 'app'
	};
	
	module.exports = configs;

/***/ },
/* 7 */
/*!********************************************!*\
  !*** ./client/src/gamestates/play/play.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var GameState = __webpack_require__(/*! ../../components/gamestate/gamestate.js */ 1);
	var init = __webpack_require__(/*! ./init.js */ 2);
	var preload = __webpack_require__(/*! ./preload.js */ 3);
	var create = __webpack_require__(/*! ./create.js */ 4);
	var update = __webpack_require__(/*! ./update.js */ 5);
	
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map