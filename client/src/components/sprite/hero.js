import ExtendedSprite from './extendedsprite.js';
import jump from './behaviours/jump.js';
import stop from './behaviours/stop.js';
import move from './behaviours/move.js';
import hurt from './behaviours/hurt.js';
import hit from './behaviours/hit.js';

/*
    @Hero
*/
class Hero extends ExtendedSprite{
	constructor(game, x, y, sprite, props){
	    super(game, x, y, sprite, props);
	}
}

Hero.prototype = Object.assign(
    Hero.prototype, 
    jump,
    stop,
    move,
    hurt,
    hit
);

export default Hero;