function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload(){
  fish1=loadImage("fish1.jpg");
  fish2=loadImage("fish2.jpg");
  fish3=loadImage("fish3.png");
  fish4=loadImage("fish4.png");
  fish5=loadImage("fish5.jpg");
  crab1=loadImage("crab1.png");
  crab2=loadImage("crab2.png");
  net=loadImage("et.jpg");

  waves=loadSound("waves.wav");
  clap=loadSound("clap.wav");
  cry=loadSound("cry.wav");


}

function draw() {
  background(255,255,255);  
  drawSprites();
}