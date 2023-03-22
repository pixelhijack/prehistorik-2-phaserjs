var debugBehaviour = {
    debug: function(toDebug){
       this._debugText.visible = true;
       this._debugText.scale.x = this.scale.x;
       this._debugText.setText(toDebug.toString() || '');
       return this;
    }
};

module.exports = debugBehaviour;