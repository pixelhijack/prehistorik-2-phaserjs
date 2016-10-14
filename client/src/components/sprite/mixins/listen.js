var listen = {
    listen: function(eventSource, callback){
        eventSource.add(callback, this);
    },
    onEvents: function(event){
        console.log('[%s]: ', this.constructor.name, event);
    }
};

module.exports = listen;