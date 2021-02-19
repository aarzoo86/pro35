const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var balloon , balloonPosition ,height, balloonIMG;
var backGroundIMG;
var database ;

function preload()
{
	balloonIMG=loadImage("images/hab.png")
	backgroundIMG=loadImage("images/bg.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database()
  balloon = createSprite(250, 650, 50, 50);
  balloon.addImage(balloonIMG)
  balloon.scale = 0.5

  var balloonPosition=database.ref('balloon/position')
  balloonPosition.on("value",readPosition,showError);

}


  function draw() {
    rectMode(CENTER);
    background(backgroundIMG);
  
    if(keyDown(LEFT_ARROW)){
      updateHeight(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(1,0);
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,1);
  }  
    drawSprites();
  }
  
  function updateHeight(x,y){
  database.ref('balloon/position').set({
    'x': height.x+x,
    'y': height.y+y
  })
  }
  
  function readPosition(data){
    height=data.val();
    balloon.x=height.x;
    balloon.y=height.y;
    }

    function showError(){
    console.log("getting error while reading values from database");
    
    }