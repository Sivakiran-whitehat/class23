const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world ;
var ground ;

var box1;
var box2;
function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;

 
 box1 = new Box(200,200,50,80);

 box2 = new Box(240,300,50,100)

 ground = new Ground(200,390,400,10)
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  
  box1.display();
  box2.display();
  ground.display();
}