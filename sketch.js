var wall,thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet = createSprite(200,height/2,80,20);
  bullet.shapeColor = "white";
  wall = createSprite(1200,height/2,thickness,height/2)
  wall.shapeColor = rgb(80,80,80)
  bullet.velocityX = speed;
}

function draw() {
  background(2);
  if (hasCollided(bullet, wall)) {
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness *thickness*thickness)
      bullet.x = wall.x -((wall.width +bullet.width)/2)
  }
  
  //console.log(damage)
  if(damage>10){
    wall.shapeColor =rgb(255,0,0)
  }
  if(damage<10){
    wall.shapeColor =rgb(0,255,0)
  }
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
      var bulletRightEdge=lbullet.x +lbullet.width;
      var wallLeftEdge=lwall.x;
      if(bulletRightEdge>=wallLeftEdge){
        return true;
      }
      return false;
}
