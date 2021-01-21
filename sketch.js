
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground1;
var dustbin1;
var dustbin2;
var dustbin3;
var dustbin4img;
var dustbin4


function preload(){
dustbin4img=loadImage("trashcan.png")
  
  }
function setup() {
  createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ball= new Paper(50,450,30,)
  ground1= new Ground(600,height,1200,20)
  dustbin4=createSprite(530,660,20,40);
  dustbin4.addImage(dustbin4img)
  dustbin4.scale=0.8;
  dustbin1= new Bucket(480,660,8,50)
  dustbin2= new Bucket(580,660,8,50)
  dustbin3= new Bucket(530,690,110,10)
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ball.display()
  ground1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  dustbin4.display()
  drawSprites();
}

 function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:133,y:-133})
  }
}




