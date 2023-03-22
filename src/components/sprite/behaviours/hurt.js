var hurtBehaviour = {
    hurt: function(direction){
        
        this.setState('hurt');
        
        this.body.velocity.y -= 100;
        if(direction && direction.left){
            this.body.velocity.x += 50;
        }
        if(direction && direction.right){
            this.body.velocity.x -= 50;
        }
        return this;
    }
};

module.exports = hurtBehaviour;