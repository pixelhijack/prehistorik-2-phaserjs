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
            this.body.velocity.x -= this.props.acceleration;
            break;
        case 'right':
            this.body.velocity.x += this.props.acceleration;
            break;
        case 'up':
            this.jump();
            break;
        case 'down':
            break;
    }   
}

module.exports = reactions;