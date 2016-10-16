var reactions = function(event){
    switch(event.type){
        case 'MOVE': 
            onMove.call(this, event);
            break;
        case 'HURT': 
            onHurt.call(this, event);
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
            this.setState('move', this.props.timeOf.move);
            break;
        case 'right':
            this.moveRight();
            this.setState('move', this.props.timeOf.move);
            break;
        case 'up':
            this.jump();
            break;
        case 'down':
            break;
        case 'stop':
            this.stop();
            break;
        case 'hit':
            this.setState('hit', this.props.timeOf.hit);
            break;
    }   
}

function onHurt(event){
    
}

function onDie(event){
    // removing event listeners on state shutdown otherwise causing memory leak and GC fails
    this.game.state.states.Play.eventsOf.keys.remove(this.onEvents, this);
    this.game.state.states.Play.eventsOf.level.remove(this.onEvents, this);
    this.game.state.start('GameOver', true, false, { levelNumber: 1 });
}

module.exports = reactions;