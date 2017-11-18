window.onload = function () {

    game = new Phaser.Game(1024, 768, Phaser.CANVAS);
    Game = game.state.add("game", PowerBlaster.Game, false);
    game.state.add("boot", PowerBlaster.Boot,true);
    game.state.add("title", PowerBlaster.Title, false);
    game.state.add("menu", PowerBlaster.Menu, false);
    game.state.add("gameOver", PowerBlaster.gameOver, false);
}

var PowerBlaster = {};

PowerBlaster.Boot = function (game) {
};

PowerBlaster.Boot.prototype = {

    preload() {

        game.stage.backgroundColor = "#6f9695";
        game.load.image('play-button', '././assets/play-button.png');
        game.load.image('circle', '././assets/circle.png');
    },

    create() {

        this.input.maxPointers = 1;
        this.disableVisibilityChange = true;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.minWidth = 568;
        this.scale.minHeight = 426;
        this.scale.maxWidth = 1024;
        this.scale.maxHeight = 768;
        this.scale.pageAlignHorizontally = true;

        if (game.device.desktop) {
            this.scale.forceOrientation(true, false);
        }


        this.game.state.start("title")


    },

};
