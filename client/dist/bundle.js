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

	var GameState = __webpack_require__(/*! ./components/gamestate/gamestate.js */ 2);
	var init = __webpack_require__(/*! ./init.js */ 4);
	var preload = __webpack_require__(/*! ./preload.js */ 5);
	var create = __webpack_require__(/*! ./create.js */ 6);
	var update = __webpack_require__(/*! ./update.js */ 3);
	
	var globalConfigs = __webpack_require__(/*! ./globalconfigs.js */ 7);
	
	GameState.prototype = {
	    init: init,
	    preload: preload,
	    create: create,
	    update: update
	};
	
	var game = new Phaser.Game(
	    globalConfigs.WIDTH, 
	    globalConfigs.HEIGHT, 
	    globalConfigs.AUTO, 
	    globalConfigs.DOM_ELEMENT
	);
	
	game.state.add('Game', GameState);
	
	game.state.start('Game', true, true, { 
	    initialConfig: 'some initial state'
	});

/***/ },
/* 1 */,
/* 2 */
/*!******************************************************!*\
  !*** ./client/src/components/gamestate/gamestate.js ***!
  \******************************************************/
/***/ function(module, exports) {

	function GameState(){
	    this.keys;
	}
	
	GameState.prototype.init = function(configs){
	    console.log('[PHASER] INIT - to be overrided', configs);
	};
	
	GameState.prototype.preload = function(){
	    console.log('[PHASER] PRELOAD - to be overrided');
	};
	
	GameState.prototype.create = function(){
	    console.log('[PHASER] CREATE - to be overrided');
	};
	
	GameState.prototype.update = function(){
	    console.log('[PHASER] UPDATE - to be overrided');
	};
	
	module.exports = GameState;

/***/ },
/* 3 */
/*!******************************!*\
  !*** ./client/src/update.js ***!
  \******************************/
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
	    
	    console.log('[PHASER] UPDATE lifecycle method extracted');
	};
	
	module.exports = update;

/***/ },
/* 4 */
/*!****************************!*\
  !*** ./client/src/init.js ***!
  \****************************/
/***/ function(module, exports) {

	var init = function(configs){
	    console.log('[PHASER] INIT lifecycle method extracted', configs);
	};
	
	module.exports = init;

/***/ },
/* 5 */
/*!*******************************!*\
  !*** ./client/src/preload.js ***!
  \*******************************/
/***/ function(module, exports) {

	var preload = function(){
	    console.log('[PHASER] PRELOAD lifecycle method extracted');
	};
	
	module.exports = preload;

/***/ },
/* 6 */
/*!******************************!*\
  !*** ./client/src/create.js ***!
  \******************************/
/***/ function(module, exports) {

	var create = function(){
	    
	    this.keys = this.game.input.keyboard.createCursorKeys();
	    this.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    
	    console.log('[PHASER] CREATE lifecycle method extracted');
	};
	
	module.exports = create;

/***/ },
/* 7 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map