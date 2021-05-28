const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var avatar, avatar_img, avatar_img2;
var sofa, bookshelf, cabinet, lamp, tv, table;
var sofa_img, bookshelf_img, cabinet_img, lamp_img, tv_img, table_img;
var bg_img;
var edges;
var platform1, platform2, platform3;

function preload(){
  avatar_img = loadImage("Man_walking.png");
  avatar_img2 = loadImage("Man_jumping.png");
  sofa_img = loadImage("sofa_img.png");
  lamp_img = loadImage("lamp_img.png");
  bookshelf_img = loadImage("bookshelf_img.png");
  cabinet_img = loadImage("cabinet_img.png");
  tv_img = loadImage("tv_img.png");
  table_img = loadImage("table_img.png");
  bg_img = loadImage("lava.jpg");
}

function setup() {
  createCanvas(displayWidth-20,  displayHeight-120);
  engine = Engine.create();
  world = engine.world;

  avatar = createSprite(100,500,50,50);
  avatar.addImage(avatar_img);
  avatar.scale = 0.5;

  sofa = createSprite(300, 350, 50, 50);
  sofa.addImage(sofa_img);
  sofa.scale = 0.3;

  lamp = createSprite(650,290,50,50);
  lamp.addImage(lamp_img);
  lamp.scale = 0.5;

  bookshelf = createSprite(850,160,50,50);
  bookshelf.addImage(bookshelf_img);
  bookshelf.scale = 0.4;

  table = createSprite(450,250,50,50);
  table.addImage(table_img);
  table.scale = 0.5;

  tv = createSprite(475,500,50,50);
  tv.addImage(tv_img);
  tv.scale = 0.35;

  cabinet = createSprite(1000,400,50,50);
  cabinet.addImage(cabinet_img);
  cabinet.scale = 0.7;

  platform1 = new Platform(160,590,80,20);
  platform2 = new Platform(1100,280,80,20);
  platform3 = new Platform(690,475,80,20);
}

function draw() {
  background(bg_img);  

  avatar.velocityX = 0;
  avatar.velocityY = 0;

  if(keyDown("space")){
    avatar.velocityY = -4;
    avatar.addImage(avatar_img2);
  }

  if(keyDown("RIGHT_ARROW")){
    avatar.velocityX = 4;
    avatar.velocityY = 0;
  }

  //if(avatar.isTouching(platform2 || platform3)){
    //avatar.velocityX = 0;
    //avatar.velocityY = 0;
  //}

  avatar.velocityY = avatar.velocityY + 0.8;
  edges = createEdgeSprites();
  avatar.collide(edges);

  //avatar.bounceOff(platform2);
  //avatar.bounceOff(platform3);

  Engine.update(engine);

  platform1.display();
  platform2.display();
  platform3.display();

  drawSprites();
  
}