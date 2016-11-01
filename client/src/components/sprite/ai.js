var ExtendedSprite = require('./extendedsprite.js');
var decide = require('./behaviours/decide.js');
var move = require('./behaviours/move.js');
var turn = require('./behaviours/turn.js');
var hurt = require('./behaviours/hurt.js');

/*
    @Hero
*/
function AI(game, x, y, sprite, props){
    ExtendedSprite.call(this, game, x, y, sprite, props);
    
    this.id = this.constructor.name + '-' + x + '-' + y + '-' + this.game.time.now;
}

AI.prototype = Object.create(ExtendedSprite.prototype);
AI.prototype.constructor = AI;

AI.prototype = Object.assign(
    AI.prototype, 
    decide,
    move,
    turn,
    hurt
);

module.exports = AI;