var statefulCreature = {
    /*
        @setState: set timestamp
    */
    setState: function(type, time){
        if(this.state[type] !== undefined){
            // + 200: realistic animation time
            // + 0: not animating at all as it is already expired while the execution context get there
            // + 10: minimal 
            // + 500: too much delayed reaction
            this.state[type] = this.game.time.now + (time || 200);
        }
    },
    /*
        @getState
        @return first state in the priority order which has not yet expired
    */
    getState: function(){
        for(var type in this.state){
            if(this.game.time.now < this.state[type]){
                return type;
            }
        }
        return 'idle';
    },
    /*
        @hasState
        @return true if state still valid, false if expired, undefined if not found
    */
    hasState: function(type){
        return this.state[type] !== undefined ? this.state[type] >= this.game.time.now : undefined;
    }
};

module.exports = statefulCreature;