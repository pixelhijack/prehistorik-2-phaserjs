var GameState = require('../../components/gamestate/gamestate.js');

/*
    @Menu
    inherits from GameState component
*/
function Menu(){
    GameState.call(this);    
}
Menu.prototype = Object.create(GameState.prototype);
Menu.prototype.constructor = Menu;

/*
    @override 
*/
Menu.prototype = {
    update: function(){
        console.log('[PHASER][Menu][Update]');
    }
};

module.exports = Menu;
