var jumpBehaviour = {
    jump: function(){
        if(this.body.touching.down || this.body.blocked.down){
            this.body.velocity.y -= this.props.jumping;
        }
        return this;
    }
};

module.exports = jumpBehaviour;