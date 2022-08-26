var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png");
}



function setup(){
  
  createCanvas(400,400);

 path=createSprite(200,200);
 path.addImage(pathImg);
 path.velocityY = 4;
 path.scale=1.2;


 
 boy = createSprite(200,300,20,20);
 boy.scale=0.9;
 boy.addAnimation("JakeRunning",boyImg);
  
 
 
 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;

 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3])
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if(path.y > 400 ){
    path.y = height/2;
  }



  drawSprites();
}