class Form{
    constructor(){

    }

    display(){
        var x = 450;
        var title = createElement('h2');
        title.html('Car Race Game');
        title.position(x,150);
        var input = createInput("name");
        input.position(x,200);
        var button = createButton("play");
        button.position(x,250);
        button.mousePressed(function(){
            input.hide();
            title.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html('Hello ' + name + '!');
            greeting.position(x,250);
        })
    }
}