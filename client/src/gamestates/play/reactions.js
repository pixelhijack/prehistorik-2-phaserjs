var reactions = function(event){
    switch(event.type){
        case 'MOVE': 
            onMove.call(this, event);
            break;
    }
};

function onMove(event){
    switch(event.key){
        case 'left':
            this.runLeft();
            break;
        case 'right':
            this.runRight();
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

module.exports = reactions;