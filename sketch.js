
var canvas, backgroundImg, playerCount, database;
var form, player, game,allPlayers;
var gameState = 0; 

var car1,car2,car3,car4;
var cars;

var car1img,car2img,car3img,car4img,trackimg;

function preload(){
   car1img = loadImage('car1.png');
   car2img = loadImage('car2.png');
   car3img = loadImage('car3.png');
   car4img = loadImage('car4.png');
   trackimg = loadImage('track.jpg');
}

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth,displayHeight);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
 
  if(gameState === 2){
    game.end();
    //game.update(2);
  }
}