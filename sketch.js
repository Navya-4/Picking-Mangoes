
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroungImage;



function preload()
{
	girl = loadImage ("Plucking Mangoes/g3.png")
}

function setup() {
	createCanvas(1280, 606);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone = new Stone (315,350,30,30)

ground = new Ground (640,595,1280,20)

tree = new Tree (1000,360,500,500);


	Engine.run(engine);
  
}




function draw() {
  rectMode(CENTER);
  background ("lightgrey")

  image (girl, 300,315)




  stone.display();
  ground.display();
  tree.display();
  
  drawSprites();
 
}



