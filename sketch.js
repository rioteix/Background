
let mySpritesheet;
let myAnimation;
let hippoHank;
let hippoHankStill;
let tile_sprite_sheet;
let mySpritesheet2;
let myAnimation2;
let cooperCroc;
let bgX = 0, bgY = 0; //initial position for background and foreground
let fgX = 0, fgY = 0


document.body.style.backgroundImage = "('Hippo.png')";

function preload(){
  mySpritesheet = loadSpriteSheet('Hippo.png', 32, 32, 12);
  myAnimation = loadAnimation(mySpritesheet);
  hippoHank = createSprite(width/2, height/2, 12); 
  hippoHankStill = createSprite(width/2, height/2, 12);
  cooperCroc = createSprite(width/2, height/2, 12);
  mySpritesheet2 = loadSpriteSheet('Croco.png', 32, 32, 12);
  myAnimation2 = loadAnimation(mySpritesheet2)
  background = loadImage('bg2.png', 30, 30)
  }

function setup(){
  createCanvas(1880, 950)
  

  hippoHank.scale = 3.0;
  hippoHank.addAnimation("walking", myAnimation );
  hippoHank.addImage("still", loadImage("HippoStill.png"));
  hippoHank.setDefaultCollider();

  cooperCroc.scale = 3.0;
  cooperCroc.addAnimation("walking", myAnimation2 );
  cooperCroc.addImage("still", loadImage("Croco.png"));
  cooperCroc.setDefaultCollider();
}





function draw(){
     image(background, bgX, bgY);
     drawSprites();



}



function keyPressed(){
  if(key === 'd'){
    hippoHank.position.x += 10;
    hippoHank.mirrorX(1);
  }

  if(key === 'w'){
    hippoHank.position.y -= 10;
  }

  if(key === 's'){
    hippoHank.position.y += 10;
  }

  if(key === 'a'){
    hippoHank.position.x -= 10;
    hippoHank.mirrorX(-1)
  }

  if(key === 'a'){
    hippoHank.position.x -= 10;
  }

  if(key === 'j'){
    cooperCroc.position.x -= 10;
     cooperCroc.mirrorX(1)
  }

  if(key === 'k'){
    cooperCroc.position.y +=10;
  }

  if(key === 'l'){
    cooperCroc.position.x += 10;
    cooperCroc.mirrorX(-1)
  }

  if(key === 'i'){
    cooperCroc.position.y -= 10;
  }


}



