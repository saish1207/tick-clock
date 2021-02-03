const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hr,mm,sc,scAngle,mmAngle,hrAngle

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
  

}

function draw() {
  background("black");  
  translate(400,200)

  hr = hour();
  mm = minute();
  sc = second();

  
  scAngle = map(sc,0,60,0,360)
  mmAngle = map(mm,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)

push()
rotate(-90)
rotate(scAngle);
  stroke(255 );
  strokeWeight(7);
  line(0, 0, 100, 0 )
  pop()


  push()
  rotate(-90)
rotate(mmAngle);
stroke(0, 128, 0) ;
strokeWeight(7);
line(0,0,70,0 )
  pop()
 
  push()
  rotate(-90)
  rotate(hrAngle);
  stroke(255,140,0 );
  strokeWeight(7);
 line(0,0,40,0 )
    pop()

  drawSprites();
}