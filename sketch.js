
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stone,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var world,boy;
var chain;

function preload(){
	boy=loadImage("images/boy.png");
    stone=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,200,30);
	mango3=new mango(1100,40,30);
	mango4=new mango(1150,100,30);
	mango5=new mango(1020,100,30);
	mango6=new mango(950,200,30);
	mango7=new mango(1030,200,30);
	mango8=new mango(1150,200,30);
	mango9=new mango(1230,160,30);
	mango10=new mango(1220,240,30);
	mango11=new mango(990,250,30);
	
	stone=new Stone(500,800,20);

	treeObj=new tree(1050,600);
	groundObject=new ground(width/2,600,width,20);

	chain = new Chain(stone.body,{x:240, y:440});
	
	Engine.run(engine);

}

function draw() {

  background("skyblue");
  //Add code for displaying text here!
  image(boy ,200,370,200,300);

  textSize(25);
  fill("black")
  text("Press Space to get a second Chance to Play !",100,100);
  
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  stone.display();

  chain.display();

  groundObject.display();

  

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly()
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}


function detectollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance <= lmango.r + lstone.r){
   Matter.Body.setStatic(lmango.body,false);
  }
}
