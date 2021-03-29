const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1350, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  tree = new Tree(1125,290,450,580);
  //tree = new Tree(1125,290,450,580);
  ground = new Ground(675,590,1350,10);

	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  tree.display();
  ground.display();

}



