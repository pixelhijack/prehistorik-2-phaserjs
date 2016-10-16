var turnBehaviour = {
    turn: function(){
        if(this.body.blocked.left || this.body.blocked.right){
            this.scale.x *= -1;
        }
    }
};

module.exports = turnBehaviour;