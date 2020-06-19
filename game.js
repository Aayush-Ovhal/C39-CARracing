class Game{

  constructor(){
}

  getState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function(data){
           gameState = data.val();
      });
  }

  update(state){
     database.ref('/').update({
         gameState: state
     })
  }

  async start(){
      if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
          } 

          form = new Form();
          form.display();
      }

      car1 = createSprite(200,200);
      car2 = createSprite(400,200);
      car3 = createSprite(600,200);
      car4 = createSprite(800,200);

      cars = [car1,car2,car3,car4];

      car1.addImage("car1",car1img);
      car2.addImage("car2",car2img);
      car3.addImage("car3",car3img);
      car4.addImage("car4",car4img);
      
  }

  play(){
      colorMode(RGB);
    form.hide();
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if(allPlayers !== undefined){
      background(0,0,255);
      image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
        var index = 0;
        var x = 200;
        var y;
        for(var plr in allPlayers){
          index += 1;
          x += 230;
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
          if(index === player.index){
              camera.position.x = displayWidth/2;
              camera.position.y = cars[index-1].y;
              fill(255,0,0);
              ellipse(cars[index-1].x,cars[index-1].y,50,100);
          }
        }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 50;
        player.update();
    }

    // console.log(player.distance);

    if(player.distance > 4300){
        gameState = 2;
        player.rank += 1;
        Player.updateCarsAtEnd(player.rank);
    }

    drawSprites();
}

   end(){
    //   console.log("get out!!!");
      console.log(player.rank);
  }
}