var MyGame = {};

MyGame.StateA = function (game) {

    this.spinner = null;
    this.text = null;

};

MyGame.StateA.prototype = {

    init: function () {

        console.log(this)

        // calls local reference to GameObjectCreator.graphics
        // which is in turn a local reference to the Phaser.Graphics constructor
        var box = this.make.graphics(0, 0);

        // calls to local methods of Phaser.Graphics which are now methods of 'box' the Object it constructed
        // defines the line style parameter 1: width, 2: color hexcode, 3: alpha value
        box.lineStyle(8, 0xFF0000, 0.8);
        // defines fill parameter 1: color hexcode, 2: color alpha
        box.beginFill(0xFF700B, 1);
        // draws rectangle parameter 1: x coordinate, 2: y coordinate, 3: width, 4: height
        box.drawRect(-50, -50, 100, 100);
        // finishes filling the Rectangle
        box.endFill();


        // creates new spinner object by calling local reference to GameObjectFactory.sprite 
        // which like this.make.graphics is a reference to Phaser.Graphics constructor this 
        // is a reference to Phaser.Sprite constructor
        this.spinner = this.add.sprite(this.world.centerX, this.world.centerY, box.generateTexture());

        // defines 'anchor' and sets origin point for texture in the center
        this.spinner.anchor.set(0.5);

        this.text = this.add.text(400, 300, "Loading: 0%", { font: "32px Arial", fill: "#ffffff", align: "center" });
        this.text.anchor.x = 0.5;

    },

    //after init finishes Phaser empties the loader queue

    //internaly phases runs through what is called a core game loop occuring 60 times per second
    // loadUpdate is only while there are files being loaded after that update runs instead if defined
    preload: function () {

        //phaser adds each image to the loader queue
        this.load.image('background', '../assets/wave.jpg');
        this.load.image('phaser', '../assets/phaser.png');

        //  Fake the loading of images so you can see what's going on with loadUpdate
        //  
        //  Enable network throttling in Chrome Dev Tools to see the result.
        //  I suggest a speed of Regular 4G (4 Mbps)

        for (var i = 0; i < 200; i++)
        {
            this.load.image('asuna' + i, '../assets/asuna_sao_by_vali233.png?rnd=' + i);
        }
        // an event is fired when a file in the queue is done being loaded or failed to load 
        // any function bound to this recieves the following parameters
        // progress, file key, success?, total loaded files, total files
        this.load.onFileComplete.add(this.fileLoaded, this);

    },

    //any time a file is loaded this function is called because it is bound to onFileComplete 
    fileLoaded: function (progress) {
        // uses progress parameter passed by onFileComplete to update the loading text's percentage
        this.text.text = "Loading: " + progress + "%";

    },

    loadUpdate: function () {

        this.spinner.rotation += 0.05;

    },

    create: function () {

        //  The load is now finished, loadUpdate won't run any more, so fade out the spinner

        this.add.tween(this.spinner.scale).to( { x: 0, y: 0 }, 1000, "Elastic.easeIn", true, 250);
        this.add.tween(this.text).to( { alpha: 0 }, 1000, "Linear", true);

    }

};
