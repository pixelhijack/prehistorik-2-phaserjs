import ExtendedSprite from './extendedsprite.js';
import decide from './behaviours/decide.js';
import move from './behaviours/move.js';
import turn from './behaviours/turn.js';
import hurt from './behaviours/hurt.js';
import boundTo from './behaviours/boundto.js';

/*
    @Hero
*/

class AI extends ExtendedSprite{
	constructor(game, x, y, sprite, props){
	    super(game, x, y, sprite, props);
	    this.id = this.constructor.name + '-' + x + '-' + y;
	}
}

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

export default AI;