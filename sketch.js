
var trex ,trex_running , ground , ground_image , iground , cloud_image;

function preload(){
  trex_running = loadAnimation("trex1.png" , "trex3.png" , "trex4.png");
  ground_image = loadImage("ground2.png");

  cloud_image = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50 , 160 , 20 , 50);
 trex.addAnimation("running" , trex_running);

 ground = createSprite(300 , 180 , 600 , 20); // x= w/2

 iground = createSprite(300 , 185 , 600 , 10)

 var ran = Math.round(random(10,60))
 //console.log(ran);

}

function draw(){
  background("white");

if(keyDown("up_arrow") && trex.y >133) { 
trex.velocityY = -10;
}

trex.velocityY = trex.velocityY+0.7;
//console.log(trex.y);

trex.collide(iground);
  ground.velocityX = -2;

 if(ground.x <0){
  ground.x =ground.width/2;
 }

 ground.addImage(ground_image);
 iground.visible=false;

 spawnClouds();
 spawnObstacles();

  drawSprites();
  

}

function spawnClouds(){
  if(frameCount % 60 ==0){     
 cloud =createSprite(600,100,40,10);
 cloud.velocityX = -3
 cloud.addImage(cloud_image);
 cloud.y = Math.round(random(10 , 60));

 console.log(cloud.depth);
 trex.depth =cloud.depth+1

  } 
}

function spawnObstacles() {
if(frameCount % 60 == 0) {
  obstacles = createSprite(600 , 165 , 10 , 40);
  obstacles.velocityX = -3;
}
}

//120/60 = 2   Q
// 120% 60 = 0 modulo  R

//123 %60 = 
