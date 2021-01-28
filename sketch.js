const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hr,mm,sc,scAngle,mmAngle,hrAngle

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  hr = hour();
  mm = minute();
  sc = second();

  

}

function draw() {
  background("black");  
  scAngle = map(sc,0,60,0,360)
  mmAngle = map(mm,0,60,0,360)
  hrAngle = map(mm,0,60,0,360)

push()
rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(400, 130, 300, 130 )
  pop()


  push()
rotate(mmAngle);
fill("blue")
strokeWeight(7);
line(1,20,400,20 )
  pop()
 
  push()
  rotate(hrAngle);
  fill("green")
  strokeWeight(7);
 line(1,20,400,20 )
    pop()

  drawSprites();
}