var boundToBehaviour = {
    setBounds: function(bounds){
        
        if(!bounds){ 
            return;
        }

        // @Point { x, y }
        if(bounds.hasOwnProperty('x') && 
            bounds.hasOwnProperty('y')){
            this.props.boundTo = new Phaser.Point(bounds.x, bounds.y);
        }
        
        // @Rectangle { x1, x2 }
        if(bounds.hasOwnProperty('x1') && 
            bounds.hasOwnProperty('x2') &&
            !bounds.hasOwnProperty('y1') &&
            !bounds.hasOwnProperty('y2')){
                this.props.boundTo = new Phaser.Rectangle(bounds.x1, 0, bounds.x2 - bounds.x1, this.game.height);
        }
	    
	    // @Rectangle { x1, y1, x2, y2 }
        if(bounds.hasOwnProperty('x1') && 
            bounds.hasOwnProperty('x2') &&
            bounds.hasOwnProperty('y1') &&
            bounds.hasOwnProperty('y2')){
                this.props.boundTo = new Phaser.Rectangle(bounds.x1, bounds.y1, bounds.x2 - bounds.x1, bounds.y2 - bounds.y1);
        }
    },
    checkBounds: function(){
        // boundTo @Rectangle {x1, x2} or {x1, y1, x2, y2}
        if(this.props.boundTo &&
            this.props.boundTo.hasOwnProperty('width') && 
            (this.x < this.props.boundTo.x && this.facingLeft || 
            this.x > this.props.boundTo.x + this.props.boundTo.width && this.facingRight)){
                this.debug(this.id);
                this.turn();
        }
        // boundTo @Point {x, y}
        if(this.props.boundTo &&
            !this.props.boundTo.hasOwnProperty('width') && 
            !Phaser.Rectangle.containsPoint(this.getBounds(), this.props.boundTo)){
                if((this.x < this.props.boundTo.x && this.facingLeft) || 
                    (this.x > this.props.boundTo.x && this.facingRight)){
                        this.debug(this.id);
                        this.turn();
                }
        }
    }
};

module.exports = boundToBehaviour;