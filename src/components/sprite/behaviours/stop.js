var stopBehaviour = {
    stop: function(){
        // slippery rate: 1.1, should go later to levelConfig
        this.body.velocity.x /= 1.1;
        this.setState('stop');
        return this;
    }
};

module.exports = stopBehaviour;