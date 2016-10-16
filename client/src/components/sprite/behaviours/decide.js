var decideBehaviour = {
    update: function(){
        this.animations.play('move');
        this.turn();
        this.move();
    }
};

module.exports = decideBehaviour;