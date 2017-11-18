PowerBlaster.Game = function (game) {
};

PowerBlaster.Game.prototype = {

    create()
    {
      this.circle = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'circle');
      this.circle.tint = 0xf1a749;
      this.circle.inputEnabled = true;
      this.circle.events.onInputDown.add(this.playGO, this);
    },

    update()
    {
    },

    playGO()
    {
      this.game.state.start('gameOver',true);
    }
};
