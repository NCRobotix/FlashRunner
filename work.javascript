
//////variables
var stage = 0;

var p1x = 400;
var p1y = 375;
var pWidth = 30;
var pHeight = 70;


//box;
var b1x = 200;
var b1y = 300;
var bWidth = 30;
var bHeight = 70;
var b1position = 0;
var bSpeed = 2;
var bDirection = -1;
var bDistance = 100;


var direction = 1;
var velocity = 2;
var fallingSpeed = 2;

//counters
var score = 0;
var lives = 1;


//multimedia
var red;
const platform;
var block;
const crashSound;

function setUp(){
  createCanvas(800, 500);
  rectMode(center);
  textAlign(center);
  imageMode(center);
}

function draw(){
  keyPressed();
  keyType();
  gravity();

  if(stage == 0){
    splash();
  }
  if(stage == 1){
    game();
  }
  if(mouseIsPressed == true){
    stage = 1;
  }
}

function splash(){
  background(150, 230, 240);
  image(landscape, width/2, height/2, width, height);

  fill(255);
  stroke(0);
  strokeWeight(10);
  textSize(100);
  text('FIGS', width/2, 150);
  textSize(20);
  text('BY NC', width/2, 150);

  textSize(20);
  text('DIRECTIONS', width/2, 250);
  textSize(20);
  text('DODGE THE OBSTACLES BY MOVING WITH THE RIGHT AND LEFT KEYS', width/2, 300);
  textSize(20);
  text('BY NC', width/2, 350);
}

//////game function
function game(){
  background(20, 20, 20);
  //window frame
  noFill(0);
  strokeWeight(15);
  rect(width/2, height/2, width, height);

  //box
  stroke(0);
  strokeWeight(5);
  fill(55, 50, 50);
  rect(b1x, b1y, bWidth, bHeight);
  image(platform, b1x, b1y, bWidth, bHeight);

  b1y = b1y + (gSpeed * gDirection);
  
  //player
  stroke(0);
  strokeWeight(5);
  fill(250, 0, 0);
  rect(p1x, p1y, pWidth, pHeight);
  image(red, p1x, p1y, pWidth, pHeight);

  //collisions
  if(p1x >= b1x-bWidth/2 && p1x <= b1x+bWidth/2 && p1y >= b1y-bHeight/2 && p1y <= b1y+bHeight/2){
    p1y = p1y;
    velocity = 0;
    lives = lives - 1;
    crashSound.play();
  }

  image(red, width/2, height/2, 50, 80);

  //scoreboard
  fill(255);
  stroke(0);
  strokeWeight(10);
  textSize(100);
  text('POINTS: ', 50, 50);
  text(score, 100, 50);

  fill(255);
  stroke(0);
  strokeWeight(10);
  textSize(100);
  text('LIVES: ', 150, 50);
  text(lives, 200, 50);
}

function gravity(){
  if(b1y >= minHeight){
    b1y = b1y;
  }
  else{
    b1y = b1y + (direction * velocity);
  }
}

function keyPressed(){
  if(keyDown('LEFT_ARROW')){
    p1x = p1x - 5;
  }
  if(keyDown('RIGHT_ARROW')){
    p1x = p1x + 5;
  }
}

function keyType(){
  if(keyDown('SPACEBAR')){
    ;
  }
}

function preload(){
  red = loadImage('Media/Players/RedPlayer.png');
  platform = loadImage('Media/Players/RedPlayer.png');
  crashSound = loadSound('sound.wav');
}
