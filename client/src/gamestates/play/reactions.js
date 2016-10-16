var reactions = function(event){
    switch(event.type){
        case 'MOVE': 
            onMove.call(this, event);
            break;
        case 'DIE': 
            onDie.call(this, event);
            break;
    }
};

function onMove(event){
    switch(event.key){
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
    }   
}

function onDie(event){
    // removing event listeners on state shutdown otherwise causing memory leak and GC fails
    this.game.state.states.Play.eventsOf.keys.remove(this.onEvents, this);
    this.game.state.states.Play.eventsOf.level.remove(this.onEvents, this);
    this.game.state.start('GameOver', true, false, { levelNumber: 1 });
}

module.exports = reactions;