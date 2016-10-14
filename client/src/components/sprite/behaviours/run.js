var runBehaviour = {
    runLeft: function(){
        this.scale.x = -1;
        if(this.body.velocity.x > -this.props.maxSpeed){
            this.body.velocity.x -= this.props.acceleration;
        }
    },
    runRight: function(){
        this.scale.x = 1;
        if(this.body.velocity.x < this.props.maxSpeed){
            this.body.velocity.x += this.props.acceleration;
        }
    }
};

module.exports = runBehaviour;