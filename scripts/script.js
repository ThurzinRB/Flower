var flor
var ceu
var x = 0

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ceu=new back();
  flor=new flower(width/2,height/2,height*0.1);
  flor.setup();
  ceu.setup()
}

function draw() {
  //background(255);
  ellipse(x,200,20);
  x+=0.1
  ceu.draw();
  flor.draw();
  ellipse(x,200,20);

}


