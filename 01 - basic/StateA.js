//empty MyGame constructor object declared
var MyGame = {};


//'StateA'' empty method is declared with 'game' 
MyGame.StateA = function (game) {

};

//StateA Prototype assigned to 'MyGame''
MyGame.StateA.prototype = {

    //preload method declared
    preload: function () {

        // loads image files  
        this.load.image('background', '../assets/sky.jpg');
        this.load.image('anizeen', '../assets/fate.png');

    },

    // create method declared
    create: function () {

        // calls an instance of StateB
        this.state.start('StateB');

    }

};
