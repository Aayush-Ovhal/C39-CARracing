class Form{

    constructor(){

        this.input = createInput("name");
        this.button = createButton('Submit');
        this.title2 = createElement('h3');

        this.reset = createButton("RESET");

    }

    hide(){
        this.title2.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME made by noob");
        title.position(displayWidth/2,0);

        this.reset.position(displayWidth - 100,40);

        this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);

        this.button.position(displayWidth/2,displayHeight/2);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.title2.html("NOMOSKAR " + player.name);
            this.title2.position(displayWidth/2 - 70,displayHeight/5);
        })

        this.reset.mousePressed(() =>{
            player.updateCount(0);
            game.update(0);
            Player.updateCarsAtEnd(0);
        })
    }

}