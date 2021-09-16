var ball
function setup() {
  createCanvas(600,600);
ball = createSprite(30,400,20,50)
ball.shapeColor = "orange"
}

function draw() 
{
  background("black");
  if(keyIsDown(RIGHT_ARROW)){
   ball.position.x = ball.position.x + 5 
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.position.x = ball.position.x - 5 
   }
   if(keyIsDown(UP_ARROW)){
    ball.position.y = ball.position.y - 5 
   }
   if(keyIsDown(DOWN_ARROW)){
    ball.position.y = ball.position.y + 5 
   }
drawSprites()
}




