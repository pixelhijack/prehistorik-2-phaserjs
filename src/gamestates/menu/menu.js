import GameState from '../../components/gamestate/gamestate.js';

/*
    @Menu
    inherits from GameState component
*/
function Menu(globalConfig){
    GameState.call(this);
    this.globalConfig = globalConfig;
}
Menu.prototype = Object.create(GameState.prototype);
Menu.prototype.constructor = Menu;

/*
    @override 
*/
Menu.prototype = {
    preload: preload,
    create: create,
    update: update
};

function preload () {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.load.image('menu-background', 'assets/backgrounds/bg1seamless.png');
};

function create() {

    const level = window.location.pathname.split('/level/')[1] || Math.ceil(Math.random() * 6);

    // fps debugging
    this.game.time.advancedTiming = true;

    const dimensions = {
        width: 546, 
        height: 372
    };
    // menu background
    const backgroundLayer = this.game.add.tileSprite(
        0, 
        0, 
        dimensions.width, 
        dimensions.height, 
        'menu-background'
    );

    const texts = [
        {
          key: 1,
          text: 'The Great Abyss', 
          id: 'great-abyss'
        },
        {
          key: 2,
          text: 'Downfall Rifts', 
          id: 'downfall-rifts'
        }, 
        {
          key: 3,
          text: 'Green Hell', 
          id: 'green-hell'
        },
        {
          key: 4,
          text: 'Hall of Ages', 
          id: 'hall-of-ages'
        },
        {
          key: 5,
          text: 'Into the Woods', 
          id: 'into-the-woods'
        },
        {
          key: 6,
          text: 'Mosquito Falls', 
          id: 'mosquito-falls'
        },
        {
          key: 7,
          text: 'Rise of the Tide', 
          id: 'rise-of-the-tide'
        },
        {
          key: 8,
          text: 'Stairway from Heaven', 
          id: 'stairway-from-heaven'
        }
      ].map(function(line, i){
        line.textRef = this.game.add.text(
            20, 
            30 + i * 20, 
            line.key +' - '+ line.text, { 
            font: "18px Courier", 
            fill: "#ffffff" 
          });
        return line;
      }.bind(this));

    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.game.input.addPointer();

    this.game.input.onDown.addOnce(fetchLevel, this);
    spaceKey.onDown.addOnce(fetchLevel, this);

    // load next game state by fetching level configs
    function fetchLevel(event){
        fetch('/api/levels/' + level, {
            method: 'get'
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            this.game.state.start('Play', true, true, json);
        }.bind(this));
    }

    console.log('[PHASER][Menu][Create]');
};

function update () {
    // fps 
    this.game.debug.text(this.game.time.fps, 5, 20);
}

module.exports = Menu;
