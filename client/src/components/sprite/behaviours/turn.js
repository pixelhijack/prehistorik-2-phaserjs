var turnBehaviour = {
    turnIfBlocked: function(){
        if(this.body.blocked.left || this.body.blocked.right){
            this.scale.x *= -1;
        }
    },
    turn: function(){
        this.scale.x *= -1;
    }
};

module.exports = turnBehaviour;