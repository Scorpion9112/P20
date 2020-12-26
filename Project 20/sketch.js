var speed, weight
function setup() {
  createCanvas(800,400);
  car1=createSprite(50, 60, 50, 50);
  car2=createSprite(50, 215, 50, 50);
  car3=createSprite(50, 355, 50, 50);
  g1=createSprite(400,140,800,50)
  g2=createSprite(400,285,800,50) 
  g3=createSprite(750,57.5,30,100)
  g4=createSprite(750,212.5,30,85)
  g5=createSprite(750,355,30,80)
  g1.shapeColor=color(255,255,255)
  g2.shapeColor=color(255,255,255)
  speed=random(55,90)
  weight=random(400,1500)
  speed1=random(55,90)
  weight1=random(400,1500)
  speed2=random(55,90)
  weight2=random(400,1500)
  car1.velocityX=speed
  car2.velocityX=speed1
  car3.velocityX=speed
  
}

function draw() {
  background(0);  
  if(g3.x-car1.x<(car1.width+g3.width)/1){
    car1.velocityX=0
    var deformation=.5 * weight * speed * speed/22509
    if(deformation>180){
      car1.shapeColor=color(255,0,0)
    }
    if(deformation<180&&deformation>100){
      car1.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car1.shapeColor=color(0,250,0)
    }
  }
  if(g4.x-car2.x<(car2.width+g4.width)/1){
    car2.velocityX=0
    var deformation=.5 * weight1 * speed1 * speed1/22509
    if(deformation>180){
      car2.shapeColor=color(255,0,0)
    }
    if(deformation<180&&deformation>100){
      car2.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car2.shapeColor=color(0,250,0)
    }
  }
  if(g5.x-car3.x<(car3.width+g5.width)/1){
    car3.velocityX=0
    var deformation=.5 * weight2 * speed2 * speed2/22509
    if(deformation>180){
      car3.shapeColor=color(255,0,0)
    }
    if(deformation<180&&deformation>100){
      car3.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car3.shapeColor=color(0,250,0)
    }
  }
  drawSprites();
}