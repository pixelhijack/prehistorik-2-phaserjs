var decideBehaviour = {
    update: function(){
        this.animations.play('move');
        //this.turnIfBlocked();
        this.checkBounds();
        this.move();
    }
};

module.exports = decideBehaviour;