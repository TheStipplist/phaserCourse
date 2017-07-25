MyGame.StateB = function (game) {

    //declares two local variables
    this.background;
    this.girls;

};

MyGame.StateB.prototype = {

    create: function () {

        //we create two sprites  using 'this' to reference 'myGame' add.sprite a predefined state property.
        //parameter 1: x coordinate, 2: y coordinate, 3: key of the image loaded to cache
        this.background = this.add.sprite(0, 150, 'background');

        this.girls = this.add.sprite(0, 150, 'anizeen');

        var tween = this.add.tween(this.background).to( { x: -800 }, 8000, "Linear", true, 0, -1, true);

    }

};

//functions added to the Object prototype will be added as in the preLoader and create functions and reffered to as methods
// the mystate object will be reffered to as a class