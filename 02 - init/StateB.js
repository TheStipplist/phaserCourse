MyGame.StateB = function (game) {
    // declaring key property for the image to be used
    this.key;
    console.log(this);
    //
    this.sprite;

};

MyGame.StateB.prototype = {
    //the 'init'' function is always the first called in a state when present.
    init: function (pic) {

        //takes the number generated from the create function in StateA and combines it with the string
        this.key = 'asuna' + pic;

    },

    create: function () {

        //adds the background image
        this.add.sprite(0, 0, 'background');

        //adds the text with an object literal to specify the font and fill color 
        this.add.text(16, 16, "State Example: init", { font: "16px Arial", fill: "#ffffff" });

        this.add.sprite(640, 553, 'phaser');

        //places the image in the center of the world 
        this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, this.key);
        this.sprite.anchor.set(0.5);

    }

};
