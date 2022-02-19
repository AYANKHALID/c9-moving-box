var box;


function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    box.velocityX=5;
    box.velocityY=0;
  }
  if(keyDown(LEFT_ARROW)){
    box.velocityX=-5;
    box.velocityY=0;
  }
  if(keyDown(UP_ARROW)){
    box.velocityY=-5;
    box.velocityX=0;
  }
  if(keyDown(DOWN_ARROW)){
    box.velocityY=5;
    box.velocityX=0;
  }




  drawSprites();

}




