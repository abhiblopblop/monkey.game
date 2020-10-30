
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground
var frameCount 
var gameState = "play"

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  ground = createSprite(200,380,600,20);
  ground.x = ground.width /2;
  ground.shapeColor = "yellow"
  
  monkey = createSprite(50,300,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  
  bananaGroup = new Group();
  obstacleGroup  = new Group();
}


function draw() {
background("White")
 
if (gameState === "play"){
 

if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
monkey.collide(ground);
  
  
if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
}
  
spawnbanana();
  spawnobstacle();
    
monkey.velocityY = monkey.velocityY + 0.8

  if (monkey.isTouching(obstacleGroup)){
gameState = "End"
}  
}
 if (gameState === "End"){
    
   ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
    //set lifetime of the game objects so that they are never destroyed
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
 }

drawSprites();
}

function spawnbanana() {
  if(frameCount % 60 === 0) {
    var banana = createSprite(600,250,10,40);
    //obstacle.debug = true;
    banana.velocityX = -6
    banana.addImage(bananaImage)
    
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 300;
    //add each obstacle to the group
    bananaGroup.add(banana);
  }
}
function spawnobstacle() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,360,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -6
    obstacle.addImage(obstacleImage)
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}




