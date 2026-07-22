PolySlide.States.Boot = ds.class({

    init: function () {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();
    },

    preload: function () {
        this.game.load.image("kncw_logo", "assets/loading_screen/kncw_logo.png");
    },

    create: function () {
        this.state.start("Preloader");
    }

});
