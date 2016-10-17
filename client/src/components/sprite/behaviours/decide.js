var decideBehaviour = {
    update: function(){
        this.animations.play(this.getState());
        this.turn();
        this.move();
    }
};

module.exports = decideBehaviour;