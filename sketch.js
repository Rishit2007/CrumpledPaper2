
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600,height,1200,20);
	paper1 = new Paper(100,350,50);
	console.log(paper1);
	Engine.run(engine);
	

	box1 = new Box(700,680,200,20);
	box2 = new Box(590,615,20,150);
	box3 = new Box(810,615,20,150);

	


	


}


function draw() {
  background("white");
 Engine.update(engine);
 paper1.display();
 ground1.display();
 box1.display();
 //box2.display();
 //box3.display();

 
}
function keyPressed() {
	if (keyCode === 38) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:70,y:-70});
  
	}
}