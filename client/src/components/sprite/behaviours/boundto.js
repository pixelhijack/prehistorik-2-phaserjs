var boundToBehaviour = {
    setBounds: function(bounds){
        if(!bounds || !Object.keys(bounds).length){ 
           return this;
        }
       
        // @Point {x, y}
        if(bounds.hasOwnProperty('x') && 
            bounds.hasOwnProperty('y')){
                this.boundTo = new Phaser.Point(bounds.x, bounds.y);
        }
       
        // @Rectangle { x1, x2 }
        if(bounds.hasOwnProperty('x1') && 
            bounds.hasOwnProperty('x2') &&
            !bounds.hasOwnProperty('y1') &&
            !bounds.hasOwnProperty('y2')){
                this.boundTo = new Phaser.Rectangle(bounds.x1, 0, bounds.x2 - bounds.x1, this.game.height);
        }
        
        return this;
    },
    checkBounds: function(){
        if(!this.boundTo || !Object.keys(this.boundTo).length){ 
           return;
        }
        
        // @Point {x, y} 
        if(!this.boundTo.hasOwnProperty('width') && 
            !Phaser.Rectangle.containsPoint(this.getBounds(), this.boundTo) &&
            ((this.x < this.boundTo.x && !this.facingRight) || 
            (this.x > this.boundTo.x && this.facingRight))){
                this.turn();
        }
        
        // @Rectangle {x1, x2} or {x1, y1, x2, y2}
        if(this.boundTo &&
            this.boundTo.hasOwnProperty('width') && 
            (this.x < this.boundTo.x && this.facingLeft || 
            this.x > this.boundTo.x + this.boundTo.width && this.facingRight)){
                this.turn();
        }
        
        return this;
    }
};

module.exports = boundToBehaviour;