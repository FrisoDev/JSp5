function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
var xcor = 499;
var ycor = 200;
var xSpeed = 2;
var ySpeed = 7;

function setup(){
  createCanvas(600,600);
  noStroke();
  background(0,0,0);
}

function draw(){
  fill(127,0,55)
  background(200);
  ellipse(xcor, ycor, 50);
  ellipse(xcor, ycor, 50);
  xcor += xSpeed;
  ycor += ySpeed;

  if ((xcor >= width) || (xcor <= 0)){
    xSpeed = -xSpeed;
  }
  if ((ycor >= height) || (ycor <= 0)){
    ySpeed = -ySpeed;
  }
}
