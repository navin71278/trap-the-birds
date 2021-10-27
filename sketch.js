var hunter,crow,arrow,pigeon,parrot,sun;
var gameState = "play";


var bg;
var hunterImg,crowImg,arrowImg,pigeonImg,parrotImg,sunImg;
var pigon,pigonImg;
var gameOver,gameOverImg,restart,restartImage;

var score=0, Life=3;
var bullet,bulletImg;
//var pigeonGroup,crowGroup,parrotGroup;

function preload(){
hunterImg = loadImage("hunter.png");
arrowImg = loadImage("arrowImg.png");
crowImg = loadImage("crow.png");
pigeonImg = loadImage("pigeon.png");
parrotImg = loadImage("parrot.png");
sunImg = loadImage("sunImg.png");
bg = loadImage("background.gif");
bulletImg = loadImage("bullet.png");
gameOverImg = loadImage("gameOver.png");
restartImage = loadImage("restart.png");
//pigonImg = loadImage("skill.jpg");
}

function setup(){
createCanvas(windowWidth , windowHeight);

bulletsGroup = new Group();
pigeonGroup = new Group();
crowGroup = new Group();
parrotGroup = new Group();


var hunter=createSprite(223,660,50,50);
hunter.addImage(hunterImg);
hunter.scale=0.3;

//var arrow=createSprite(250,727,50,300);
//arrow.addImage(arrowImg);
//arrow.scale=0.3;
//fill("Brown");

//var sun = createSprite(1144,173,20,20);
//sun.addImage(sunImg);
//sun.scale=0.3;

}

function draw(){
  
  background(bg);


 /* var select_item = Math.round(random(1,4));
  if (World.frameCount%100===0){
   if (select_item == 1) {
      crow();
    } else if (select_item == 2) {
      pigeon();
    } //else if (select_item == 3) {
      //Parrot();
    //}
  }
  crow();
  pigeon();
  Parrot();*/
  if(gameState==="play"){

    spawnBirds();
    spawnBullets();

   // gameOver.visible=true;
  //restart.visible = true;

   if(pigeonGroup.isTouching(bulletsGroup)){
     score=score+2;
     pigeonGroup[0].destroy();
   }

   if(crowGroup.isTouching(bulletsGroup)){
    score=score-2;
    Life = Life-1;
   crowGroup[0].destroy();
  }

  if(parrotGroup.isTouching(bulletsGroup)){
  score=score-2;
   Life = Life-1;
   parrotGroup[0].destroy();
  }

   if( Life<=0){
    gameState = "end";
   }

  }
   
   if(gameState==="end"){
    gameOver = createSprite(800,384,20,20);
    gameOver.addImage(gameOverImg);
    restart = createSprite(859,475,20,20);
    restart.addImage(restartImage);
    restart.scale=1.5;

    gameOver.scale=2.0;
    pigeonGroup . destroyEach();
    crowGroup.destroyEach();
   parrotGroup.destroyEach();
   }

   // hunter.visible = false;
   //pigeonGroup .visibile = "false";
   //crowGroup .visibile = "false";
   //parrotGroup .visibile = "false";
   if(mousePressedOver(restart)){
    reset();
  }
 

   
  

  

 
  
  
  fill("black");
text(mouseX+","+mouseY,mouseX,mouseY);


drawSprites();
//extSize(40);
//text("SCORE:"+score,1850,43);
//text("LIFE:"+Life,1861,90);
fill(0);
textSize(40);
text("SCORE:"+score,1518,53);
text("LIFE:"+Life,1533,100);


}

function Crow(){
  crow = createSprite(1950,Math.round(random(150,250)),20,50);
  crow.addImage(crowImg);
  crow.scale=0.2;
 crow . velocityX=-10;
 crow.lifetime=900;
 crowGroup.add(crow);

}


function pigeon(){
var pigeon = createSprite(1950,Math.round(random(150,250)),20,50);
pigeon.addImage(pigeonImg);

pigeon.scale=0.5;
pigeon.velocityX=-10;
pigeon.lifetime=900;
pigeonGroup.add(pigeon);
}

function parrot(){
var parrot = createSprite(1950,Math.round(random(150,250)),20,50);
parrot.addImage(parrotImg);
parrot.scale=0.5;
parrot.velocityX=-10;
parrot.lifetime=900;
parrotGroup.add(parrot);
}


function spawnBirds(){
  if(frameCount%60 ===0){
    var select_item = Math.round(random(1,3));
    if (select_item == 1) {
      Crow();
    } else if (select_item == 2) {
      pigeon();
    } else if (select_item == 3) {
      parrot();
    }
  }
    
  
}

function spawnBullets(){
 
   
    if(keyDown("UP")){
      bullet = createSprite(357,600,20,20);
      bullet.addImage(bulletImg);
      bullet.scale=0.1;
    bullet.setVelocity(6,-6);
    bulletsGroup.add(bullet);
    }
  
    
    
  }

  function reset(){
    gameState = "play";
  Life =3;
  score = 0;
  gameOver.visible=false;
  restart.visible = false;
  spawnBirds();
  spawnBullets();


  }

 