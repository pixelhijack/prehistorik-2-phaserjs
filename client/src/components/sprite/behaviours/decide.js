var decideBehaviour = {
    update: function(){
        this.animations.play(this.getState());
        this.turnIfBlocked();
        this.checkBounds();
        this.move();
    }
};

module.exports = decideBehaviour;