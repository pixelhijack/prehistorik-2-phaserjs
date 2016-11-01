var ExtendedSprite = require('./extendedsprite.js');
var decide = require('./behaviours/decide.js');
var move = require('./behaviours/move.js');
var turn = require('./behaviours/turn.js');
var hurt = require('./behaviours/hurt.js');
var boundTo = require('./behaviours/boundto.js');

/*
    @Hero
*/
function AI(game, x, y, sprite, props){
    ExtendedSprite.call(this, game, x, y, sprite, props);
    
    this.id = this.constructor.name + '-' + x + '-' + y;
}

AI.prototype = Object.create(ExtendedSprite.prototype);
AI.prototype.constructor = AI;

// hacky... :(
Object.defineProperty(AI.prototype, 'boundTo', {
    get: function() { return this._boundTo; }, 
    set: function(bounds) {
        this._boundTo = bounds;
    }
});

AI.prototype = Object.assign(
    AI.prototype, 
    decide,
    move,
    turn,
    hurt,
    boundTo
);

module.exports = AI;