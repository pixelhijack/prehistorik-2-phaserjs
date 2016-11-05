var listenBehaviour = {
    listen: function(eventSource, callback){
        eventSource.add(callback, this);
    },
    react: function(event){
        console.log('[%s]: ', this.constructor.name, event);
    }
};

module.exports = listenBehaviour;