var bullet  , wall, speed , weight , thickness
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(10,200,30,10)
  bullet.shapeColor="blue"
  thicknes=0
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="yellow"
  console.log(thickness)
  console
  speed=0
  weight=0
  deformation=0
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX=speed
  deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
} 
function draw() {
  background(255,255,255); 
  bullet.depth=wall.depth
  bullet.depth=bullet.depth+1
  collide(bullet,wall)
  if(isTouching(wall,bullet)){
    if(deformation<10){
      wall.shapeColor="green"
      }
      
    if(deformation>10){
      wall.shapeColor="red"
    }
  }
  drawSprites();
}