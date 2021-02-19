const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;
const Constraint =Matter.Constraint;

var engine,world;
var bg, ground;
var rope,hero;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,
box19,box20,box21,box22,box23,box24,box25;
var monster,bg;

function preload() {
bg = loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

ground = new Ground(600,600,1200,20)
  hero = new Hero(100,800,250)
rope = new Rope(hero.body,{x:400,y:50})
box1 = new Blocks(300,275,30,40);
  box2  = new Blocks(330,275,30,40);
  box3 = new Blocks(360,  275,30,40);
  box4= new Blocks(390, 275,30,40);
  box5 = new Blocks(420, 275,30,40);
  box6 = new Blocks(450, 275,30,40);
  box7= new Blocks(480, 275,30,40);
  box8 = new Blocks(330, 235,30,40)
  box9 = new Blocks(360, 235,30,40);
  box10= new Blocks(390, 235,30,40);
  box11 = new Blocks(420, 235,30,40);
  box12 = new Blocks(450, 235,30,40);
  box13 = new Blocks(360, 195,30,40);
  box14 = new Blocks(390, 195,30,40);
  box15 = new Blocks(420, 195,30,40);
  box16 = new Blocks(390, 155,30,40);

  box17 = new Blocks(640, 175,30,40);
  box18 = new Blocks(670, 175,30,40);
  box19 = new Blocks(700, 175,30,40);
  box20 = new Blocks(730, 175,30,40);
  box21 = new Blocks(760, 175,30,40);
  box22 = new Blocks(670,135,30,40);
  box23 = new Blocks(700,135,30,40);
  box24 = new Blocks(730,135,30,40);
  box25 = new Blocks(700,95,30,40);

monster = new Monster(1100,550,300)

}

function draw() {
  background(bg);

  Engine.update(engine);

  ground.display();
  rope.display();
  box1.display();
  
  box2.display();

  box3.display();
  
  box4.display();
  
  box5.display();

  box6.display();
  
  box7.display();
  
  box8.display();
  
  box9.display();
  
  box10.display();
  
  box11.display();
  
  box12.display();
  
  box13.display();
  
  box14.display();
  
  box15.display();
  
  box16.display();
  
  box17.display();
  
  box18.display();
  
  box19.display();
  
  box20.display();
  
  box21.display();
  
  box22.display();
  
  box23.display();
  
  box24.display();
 
  box25.display();
 
  hero.display();
  monster.display();


}

function mouseDragged()
{
	Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY}) 
}
