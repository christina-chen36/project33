const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var backgroundImg;

var snows = [];

var maxSnows = 100;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  for (var i = 0; i < maxSnows; i++) {
    snows.push(new Snow(random(0, 800), random(0, 200), 25, 25));
  }
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  for (var i = 0; i < maxSnows; i++) {
    snows[i].display();
    snows[i].update();
  }
  drawSprites();
}
