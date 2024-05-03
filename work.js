
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
var timer = 0;
var timeLimit = 60;
var splashTime;
var gameTime;

//multimedia
var red;
var landscape;
const platform;
var block;
const crashSound;
var theme;

function setUp(){
  createCanvas(800, 500);
  rectMode(center);
  textAlign(center);
  imageMode(center);

  theme.play();
}

function draw(){
  keyPressed();
  keyType();
  gravity();
  timer = millis();
  
  if(stage == 0){
    splash();
  }
  if(stage == 1){
    game();
  }
  if(stage == 2){
    loseScreen();
  }
  if(stage == 3){
    shopScreen();
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
  let text("FLASH RUNNER", width/2, 150);
  textSize(20);
  let text('BY NC', width/2, 150);

  textSize(20);
  text('DIRECTIONS', width/2, 250);
  textSize(20);
  text('DODGE THE OBSTACLES BY MOVING WITH THE RIGHT AND LEFT KEYS', width/2, 300);
  textSize(20);
  text('BY NC', width/2, 350);
}

//lose screen
function loseScreen(){
  image(landscape, width/2, height/2, width, height);
  fill(255);
  stroke(0);
  strokeWeight(10);
  textSize(100);
  text('You died... :c', width/2, height/2 200, 50);
  strokeWeight(20);
  textSize(100);
  text('SCORE: ' + score, width/2, height/2, 250, 50);
}

function shopScreen(){
  image(landscape, width/2, height/2, width, height);
  fill(255);
  stroke(0);
  strokeWeight(10);
  textSize(100);
  text('SHOP', width/2, height/2 200, 50);
}

function gravity(){
  if(b1y >= minHeight){
    b1y = b1y;
  }
  else{
    b1y = b1y + (direction * velocity);
  }
  
  //horizonal barriers
  if(p1x+pWidth/2 >= width){
    p1x = p1x-5;
  }

  if(p1x-pWidth/2 <= 0){
    p1x = p1x+5;
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
  red = loadImage('Media/Players/RedPlayer.jpg');
  platform = loadImage('Media/Players/RedPlayer.jpg');
  landscape = loadImage('Media/Players/GreenPlayer.jpg');
  crashSound = loadSound('sound.wav');
  loseSound = loadSound('sound.wav');
  theme = loadSound('sound.wav');
}
