var moveBehaviour = {
    moveLeft: function(){
        this.scale.x = -1;
        this.setState('move');
        if(this.body.velocity.x > -this.props.maxSpeed){
            this.body.velocity.x -= this.props.acceleration;
        }
        return this;
    },
    moveRight: function(){
        this.scale.x = 1;
        this.setState('move');
        if(this.body.velocity.x < this.props.maxSpeed){
            this.body.velocity.x += this.props.acceleration;
        }
        return this;
    }, 
    move: function(){
        if(this.scale.x === 1){
            this.moveRight();
        } else {
            this.moveLeft();
        }
    }
};

module.exports = moveBehaviour;