var MyGame = {};

MyGame.StateA = function (game) {
    //sets a property called 'pausedSprite' and sets is to null
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

        this.add.text(16, 16, "State Example: paused\nClick outside the browser to pause", { font: "16px Arial", fill: "#ffffff" });
        this.add.sprite(640, 553, 'phaser');

        this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'asuna1');
        this.sprite.anchor.set(0.5);

    },
    // special method that is invoked by Phaser.Game when the game become paused
    // can be invoked for two reasons, a loss of visibility or through code
    // by default phaser listens for a document.visibilitychange event, as well as 
    // window.onblur or window.onfocus this occurs in the Phaser.stage class
    paused: function () {

        // checks if our game's 'pausedSprite' has a value
        if (this.pausedSprite)
        {   
            //since it does have a value it  makes the sprite visible by setting it to true
            this.pausedSprite.visible = true;
        }
        else
        {

            // creates a game Object by accessing gameObjectCreator constructor via our game's 'make' method
            this.pausedSprite = this.make.sprite(0, 0, 'paused');
            // calls our game's stage propertie's addChild method passing the pausedSprite object as it's argument
            this.stage.addChild(this.pausedSprite);
        }

    },

    resumed: function () {

        // sets the paused sprite's visibility back to false
        this.pausedSprite.visible = false;

    }

};
