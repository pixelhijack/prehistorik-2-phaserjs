var moveBehaviour = {
    moveLeft: function(){
        this.scale.x = -1;
        if(this.body.velocity.x > -this.props.maxSpeed){
            this.body.velocity.x -= this.props.acceleration;
        }
    },
    moveRight: function(){
        this.scale.x = 1;
        if(this.body.velocity.x < this.props.maxSpeed){
            this.body.velocity.x += this.props.acceleration;
        }
    }, 
    move: function(){
        this.setState('move', this.props.timeOf.move);
        if(this.scale.x === 1){
            this.moveRight();
        } else {
            this.moveLeft();
        }
    }
};

module.exports = moveBehaviour;