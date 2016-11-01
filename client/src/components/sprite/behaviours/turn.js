var turnBehaviour = {
    turn: function(){
        if(this.body.blocked.left || this.body.blocked.right){
            this.scale.x *= -1;
        }
        return this;
    }
};

module.exports = turnBehaviour;