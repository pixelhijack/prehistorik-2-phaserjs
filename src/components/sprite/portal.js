import atlas from '../../gamestates/assetMap.js';

var Portal = function(game, jumpTo, x, y){
  
  this.jumpTo = jumpTo;
  
  Phaser.Sprite.call(this, game, x, y, 'pre2atlas');
  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.frameName = atlas.PORTAL_LEVEL_GO;
  this.anchor.setTo(0.5, 0.5);
  game.add.existing(this);
  
  
  this.update = function(){

  }
};

Portal.prototype = Object.create(Phaser.Sprite.prototype);
Portal.prototype.constructor = Portal;

module.exports = Portal;