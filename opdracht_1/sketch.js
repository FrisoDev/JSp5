var xcor = 499;
var ycor = 200;

var xcor2 = 499;
var ycor2 = 200;

var xSpeed = 2;
var ySpeed = 7;

var xSpeed2 = 5;
var ySpeed2 = 2;

function setup(){
  createCanvas(600,600);
  noStroke();
  background(0,0,0);
}

function draw(){
  background(200);
  fill(127,0,55)
  ellipse(xcor, ycor, 50);
  fill(0,200,123)
  ellipse(xcor2, ycor2, 50);

  xcor += xSpeed;
  ycor += ySpeed;
  xcor2 += xSpeed2;
  ycor2 += ySpeed2

  if ((xcor >= width) || (xcor <= 0)){
    xSpeed = -xSpeed;
  }
  if ((ycor >= height) || (ycor <= 0)){
    ySpeed = -ySpeed;
  }

  if ((xcor2 >= width) || (xcor2 <= 0)){
    xSpeed2 = -xSpeed2;
  }
  if ((ycor2 >= height) || (ycor2 <= 0)){
    ySpeed2 = -ySpeed2;
  }
}
