
var ground;
var Wall, Wall2, Wall3;
var Paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
3

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(600, 600, 1200, 20);
    Wall = new wall(755, 500, 200, 200);
	Paper = new paper(200,200,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

  ground.display();
 
  Wall.display();
  

  Paper.display()
  
 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(Paper.body,Paper.body.position,{x:400,y:-401})
  
  }
  }
  
