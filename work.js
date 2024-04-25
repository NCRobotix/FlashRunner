//import { Player } from './player.js';
import productAPI from "./api.json" assert { type: "json" };
//////loading


//////variables
var stage = 0;

var p1x = 400;
var p1y = 375;
var pWidth = 30;
var pHeight = 70;

var b1x = 200;
var b1y = 300;
var bWidth = 30;
var bHeight = 70;

var direction = 1;
var velocity = 2;
var fallingSpeed = 2;

function setUp(){
  createCanvas(800, 500);
  rectMode(center);
  textAlign(center);
}

function draw(){
  if(stage == 1){
    game();
  }
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

  //player
  stroke(0);
  fill(250, 0, 0);
  rect(p1x, p1y, pWidth, pHeight);

  //collisions
  if(p1x >= b1x-bWidth/2 && p1x <= b1x+bWidth/2 && p1y >= b1y-bHeight/2 && p1y <= b1y+bHeight/2){
    p1y = p1y;
    velocity = 0;
  }
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
