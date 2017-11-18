PowerBlaster.Menu = function (game) {
};

PowerBlaster.Menu.prototype = {

    config: {
        settingsClicked: false,
        checkBoxTicked: false,
        worldSize: 'small',
        worldSelected: false,
    },

    create()
    {
      this.playButton = game.add.sprite(this.game.world.centerX, 600, 'play-button');
      this.playButton.anchor.setTo(0.5);
      this.playButton.inputEnabled = true;
      this.playButton.events.onInputDown.add(this.playGO, this);
    },

    update()
    {

    },

    playGO()
    {
      this.game.state.start('game',true);
    }

};
