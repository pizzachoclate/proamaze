var bananaImage,obstacleImage,obstacleGroup,background, score;

function preload(){
backImage=loadImage("jungle.gpg");
player_running=
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

bananaImage=loadImage("Banana.png");
obstacleImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
background= createSprite(50,100,100,100);
background.addAnimation("background",backImage);
background.velocityX=-4;
 groundVisibility=false;
  

}

function draw() {
  background(220);
}