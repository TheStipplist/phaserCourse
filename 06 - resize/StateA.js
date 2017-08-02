var MyGame = {};

MyGame.StateA = function (game) {

    this.background = null;
    this.sprite = null;
    this.logo = null;

};

MyGame.StateA.prototype = {

    init: function () {

        //sets the scaleMode property to resize via the ScaleManager.RESIZE mode
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;

    },

    preload: function () {

        this.load.image('background', '../assets/wave.jpg');
        this.load.image('phaser', '../assets/phaser.png');
        this.load.image('yuzuki', '../assets/yuzuki_yukari_by_vali233.png');

    },

    create: function () {

        this.background = this.add.image(0, 0, 'background');
        this.background.width = this.game.width;
        this.background.height = this.game.height;

        this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'yuzuki');
        this.sprite.anchor.set(0.5);

        this.add.text(16, 16, "State Example: resize", { font: "16px Arial", fill: "#ffffff" });

        this.logo = this.add.image(this.game.width, this.game.height, 'phaser');
        this.logo.anchor.set(1, 1);

    },

    // the resize method invoked by the Phaser Scale Manager it is automatically passed 
    // two properties width and height these will be used to set the new dimensions of your game
    // this method is fired anytime the game changes size
    resize: function (width, height) {

        //sets the background width and height properties to whatever the width and height of the game is
        this.background.width = width;
        this.background.height = height;


        // references sprite object's 'x' and 'y' public properties by
        //setting their value equal to our game's world object's centerX and centerY properties
        //keeps the sprite in the center of the screen
        this.sprite.x = this.world.centerX;
        this.sprite.y = this.world.centerY;

        //keeps the logo locked into the bottom right corner of the screen. 
        this.logo.x = width;
        this.logo.y = height;

    }

};
