var turnBehaviour = {
    turnIfBlocked: function(){
        if(this.body.blocked.left || this.body.blocked.right){
            this.scale.x *= -1;
        }
        return this;
    },
    turn: function(){
        this.scale.x *= -1;
        return this;
    }
};

module.exports = turnBehaviour;