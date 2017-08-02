var MyGame = {};

// internally Phaser runs through what is called a "core game loop"
// inside this is the loadUpdate and update method

//loadUpdate only runs while there are assets loading in the Loader

MyGame.StateA = function (game) {

    this.b = 0;
    this.frames = [];
    this.start = false;

    this.sprite = null;

};

MyGame.StateA.prototype = {

    preload: function () {

        this.load.image('background', '../assets/wave.jpg');
        this.load.image('phaser', '../assets/phaser.png');
        this.load.image('asuna', '../assets/fairy_dance_asuna_by_vali233.png');

    },
    // the create phase is the 3rd method in the life cycle of a state, it is called after preload,
    // if there is nothing to load it is called after init if there is no init it is the first called 
    create: function () {
        // console.log('create');

        //  Create 10 'frames'
        for (var i = 0; i < 10; i++)
        {   
            //creates bitmap data object which is a canvas object that can be written set as the same size of the screen
            this.frames.push(this.make.bitmapData(game.width, game.height));
        }

        //creates and adds 'background' sprite, logo, and text
        this.add.sprite(0, 0, 'background');
        this.add.sprite(640, 553, 'phaser');
        this.add.text(16, 16, "State Example: preRender", { font: "16px Arial", fill: "#ffffff" });

        //declares sprite property assigns it to created sprite, sets it's transform anchor to the center
        this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'asuna');
        this.sprite.anchor.set(0.5);

        //adds tween to scale sprite 
        this.add.tween(this.sprite.scale).to( { x: 0.2, y: 0.2 }, 2000, "Sine.easeInOut", true, 500, -1, true);

    },
    // the core game loop doesnt start until create has finished running
    // this is so that any objects referenced in update have been made yet 

    // the update method is called automatically
    //Once per logic update by the core Phaser group
    update: function () {
        // console.log('this is update');

        //rotates the sprite 
        this.sprite.rotation += 0.01;

    },

    preRender: function () {
        // console.log('this is preRender');

        //clears bitmap data context using a clearRect
        this.frames[this.b].cls();
        //copies a rectangular area of space from the game's canvas, defined as the bounds property of the world object
        //set to be placed in the center of the canvas, and the image has an alpha of .1 so it's nearly transparent
        this.frames[this.b].copyRect(this.game.canvas, this.world.bounds, 0, 0, 0.1);

        this.b++;

        // if b has reached 10 then all then index 0-9(ten objects of bitmap data) then it goes back 0 to re-record them
        if (this.b === 10)
        {
            this.start = true;
            this.b = 0;
        }
        // console.log(this.frames);

    },

    render: function () {
        // console.log('this is render');
        if (this.start)
        {
            //  The frame buffer is full, so lets start drawing them back
            for (var i = 0; i < 10; i++)
            {
                this.game.context.drawImage(this.frames[i].canvas, 0, 0);
            }
        }

    }

};
