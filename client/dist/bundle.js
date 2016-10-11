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
	
	var configs = {
	    WIDTH: 1000,
	    HEIGHT: 1000,
	    DOM_ELEMENT: 'app'
	};
	
	GameState.prototype.update = function(){
	    console.log('[PHASER] UPDATE lifecycle method overriden');
	};
	
	var game = new Phaser.Game(configs.WIDTH, configs.HEIGHT, Phaser.AUTO, configs.DOM_ELEMENT);
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map