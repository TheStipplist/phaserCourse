MyGame.StateC = function(game){
    
}
MyGame.StateC.prototype = {

    //this demonstrates that after the state key, cache, and world booleans 
    // the rest of the parameters passed to state.start are passed to it's init function'
    init: function(a,b,c){
        console.log(a,b,c);
    },

    //state objects without either preload, create, update, or render
    create: function(){
        console.log('StateC create');

    }
}