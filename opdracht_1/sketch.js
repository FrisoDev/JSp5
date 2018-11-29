// var xcor = 499;
// var ycor = 200;
//
// var xcor2 = 499;
// var ycor2 = 200;
//
// var xSpeed = 2;
// var ySpeed = 7;
//
// var xSpeed2 = 5;
// var ySpeed2 = 2;
//
// let c1 = (127, 100, 200)
// function setup(){
//   createCanvas(600,600);
//   noStroke();
//   background(0,0,0);
// }
//
// function draw(){
//   background(200);
//   fill(127,0,55)
//   ellipse(xcor, ycor, 50);
//   fill(0,200,123)
//   ellipse(xcor2, ycor2, 50);
//
//   xcor += xSpeed;
//   ycor += ySpeed;
//   xcor2 += xSpeed2;
//   ycor2 += ySpeed2
//
//   if ((xcor >= width) || (xcor <= 0)){
//     xSpeed = -xSpeed;
//     let c1 = (random(255), random(255), random(255))
//   }
//   if ((ycor >= height) || (ycor <= 0)){
//     ySpeed = -ySpeed;
//   }
//
//   if ((xcor2 >= width) || (xcor2 <= 0)){
//     xSpeed2 = -xSpeed2;
//   }
//   if ((ycor2 >= height) || (ycor2 <= 0)){
//     ySpeed2 = -ySpeed2;
//   }
// }

var xcor = 499;
var ycor = 200;

var xcor2 = 499;
var ycor2 = 200;

var xSpeed = 2;
var ySpeed = 7;

var xSpeed2 = 0;
var ySpeed2 = 5;

let balletje1;
let balletje2;

function setup(){
  createCanvas(600,600);
  noStroke();
  background(0,0,0);
  balletje1 = (0, 0, 0)
  balletje2 = (0, 0, 0)
}

function draw(){
  background(255);
  fill(balletje1)
  ellipse(xcor, ycor, 50);
  fill(balletje2)
  ellipse(xcor2, ycor2, 50);

  xcor += xSpeed;
  ycor += ySpeed;
  xcor2 += xSpeed2;
  ycor2 += ySpeed2

  if ((xcor + 25 >= width) || (xcor - 25 <= 0)){
    xSpeed = -xSpeed;
    balletje1 = color(random(255), random(255), random(255))
  }
  if ((ycor + 25>= height) || (ycor - 25<= 0)){
    ySpeed = -ySpeed;
    balletje1 = color(random(255), random(255), random(255))
  }

  if ((xcor2 + 25 >= width) || (xcor2 - 25<= 0)){
    xSpeed2 = -xSpeed2;
    balletje2 = color(random(255), random(255), random(255))
  }
  if ((ycor2 + 25 >= height) || (ycor2 - 25<= 0)){
    ySpeed2 = -ySpeed2;
    balletje2 = color(random(255), random(255), random(255))
  }
}
