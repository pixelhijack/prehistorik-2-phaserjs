var decideBehaviour = {
    update: function(){
        this.animations.play('move');
        this.turnIfBlocked();
        this.move();
    }
};

module.exports = decideBehaviour;