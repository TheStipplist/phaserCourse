var MyGame = {};

MyGame.StateA = function (game) {
    this.pausedSprite = null;
};

MyGame.StateA.prototype = {

    preload: function () {

        this.load.image('background', '../assets/wave.jpg');
        this.load.image('phaser', '../assets/phaser.png');
        this.load.image('asuna1', '../assets/asuna_sao_by_vali233.png');
        this.load.image('paused', '../assets/paused.png');

    },

    create: function () {

        this.add.sprite(0, 0, 'background');

        this.add.text(16, 16, "State Example: pauseUpdate\nClick outside the browser to pause", { font: "16px Arial", fill: "#ffffff" });
        this.add.sprite(640, 553, 'phaser');

        this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'asuna1');
        this.sprite.anchor.set(0.5);

    },

    paused: function () {

        if (this.pausedSprite)
        {
            this.pausedSprite.visible = true;
        }
        else
        {
            this.pausedSprite = this.make.sprite(0, 0, 'paused');
            this.stage.addChild(this.pausedSprite);
        }

        this.pausedSprite.y = 600;

    },
    // during pauseUpdate we can still manipulate game objects
    //the game is still being rendered, if the position of a sprite is changed or rotated
    // it will still be reflected, doesnt have to be the game objects related to the pause method
    pauseUpdate: function () {

        this.pausedSprite.y -= 4;
        this.sprite.rotation += 0.01

        if (this.pausedSprite.y <= -600)
        {
            this.pausedSprite.y = 600;
        }

    },

    resumed: function () {

        this.pausedSprite.visible = false;

    }

};
