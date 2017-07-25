var MyGame = {};

MyGame.StateA = function (game) {
    console.log(this);
};

MyGame.StateA.prototype = {

    preload: function () {
        console.log(this);
        this.load.image('background', '../assets/wave.jpg');
        this.load.image('phaser', '../assets/phaser.png');
        this.load.image('asuna1', '../assets/asuna_sao_by_vali233.png');
        this.load.image('asuna2', '../assets/fairy_dance_asuna_by_vali233.png');

    },

    create: function () {
        console.log(this);
        // uses Phaser randomDataGenerator to generate a number between 1 and 2 
        var pic = this.rnd.between(1, 2);
        
        // when you start a state youcan pass it a set of parameters these are passed
        // to the started states init function 
        //the two booleans are related to the cache and world management, covered later in the book
        this.state.start('StateB', true, false, pic);
        this.state.start('StateC', true, false, pic,"alpha",false);

    }

};
