var ExtendedSprite = require('./extendedsprite.js');
var decide = require('./behaviours/decide.js');
var move = require('./behaviours/move.js');

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
    move
);

module.exports = AI;