var canvas;
var database;
var Playercount;
var allplayer;
var gameState = 0;


var quiz,player,question;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz= new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
background("Pink");
if(Playercount === 2){
  quiz.update(1);
}

if(gameState === 1){
  clear();
  quiz.play();
  textSize(25);
  stroke("black");
  fill("black");
  text("NOTE : The player with the correct answer is displayed in GREEN colour",30,375);
}
  
}
