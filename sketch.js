var Runner;
var pathImage;
function preload(){
pathImg = loadImage("path.png");
Runner1 = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
Runner = createSprite(50,160,20,20);
Runner.addAnimation("running", Runner1);
Runner.scale = 0.05;
edges = createEdgeSprites();
}

function draw() {
  background("black");
path.velocityY = 4;
if(path.y > 400){
  path.y = height/2;
}
Runner.x=World.mouseX;
drawSprites();
}