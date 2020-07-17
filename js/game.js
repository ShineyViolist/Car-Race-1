class Game{
    constructor(){

    }

    getState(){
        var gameBase = database.ref("gameState");
        gameBase.on("value",function(data){
            gameState = data.val();
        })

    }

    update(state){
        var gameBase = database.ref("/");
        gameBase.update({gameState: state});
    }

    startGame(){
        if(gameState == 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }      
    }
}