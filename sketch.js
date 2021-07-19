var gameState = "home"
var god, godImage
var man, manImage
var mcloud, mcloudImage
var gcloud, gcloudImage
var varanasiImage, varanasi
var man1, man1Image
var img1

function preload() {
  godImage = loadImage("images/god.png");
  manImage = loadImage("images/man.png");
  // mcloudImage = loadImage("images/mcloud.png");
  // gcloudImage = loadImage("images/gcloud.png");
  varanasiImage = loadAnimation("https://media.istockphoto.com/vectors/varanasi-city-skyline-black-and-white-silhouette-vector-id808053134?k=6&m=808053134&s=170667a&w=0&h=ycaTKKNiymo-KFiihFD904TPqnIHEK6CPzrq4Z2kuMc=")
  man1Image = loadImage("https://images.twinkl.co.uk/tr/image/upload/illustation/man-walking.png");
  //img1=loadImage("varanasi.gif");
}

function setup() {
  createCanvas(800, 400);

  mcloud = createSprite(200, 200, 50, 50)
  // mcloud.addImage("mancloud", mcloudImage);
  // mcloud.scale = 0.1

  gcloud = createSprite(520, 200, 50, 50);
  // gcloud.addImage("gcloud", gcloudImage);
  // gcloud.scale = 0.1

  varanasi = createSprite(398, 378, 15, 50)

  god = createSprite(700, 100, 50, 50)
  god.addImage("god", godImage);
  god.scale = 0.3

  man = createSprite(100, 330, 50, 50)
  man.addImage("man", manImage);
  man.scale = 0.1

 

  man1 = createSprite(28, 28, 10, 10)
  man1.velocityY = 0;
  man1.velocityX = 0;
  man1.setVelocity(0, 0);
  man1.addImage("1", man1Image)
  man1.scale = 0.1
  man1.debug=true;
  man1.setCollider("rectangle",0,0,20,20)


  wall1 = createSprite(59, 0, 10, 95);
  wall1.shapeColor = "blue";

  wall2 = createSprite(24, 90, 60, 10);
  wall2.shapeColor = "blue";

  wall3 = createSprite(95, 60, 10, 90);
  wall3.shapeColor = "blue ";

  wall4 = createSprite(316, 361, 10, 60);
  wall4.shapeColor = "blue";

  wall5 = createSprite(345, 300, 100, 10);
  wall5.shapeColor = "blue";

  wall6 = createSprite(62, 148, 80, 10);
  wall6.shapeColor = "blue";

  wall7 = createSprite(140, 70, 90, 10);
  wall7.shapeColor = "blue";

  wall8 = createSprite(33, 155, 10, 90);
  wall8.shapeColor = "blue";

  wall9 = createSprite(140, 152, 10, 80);
  wall9.shapeColor = "blue";

  wall10 = createSprite(160, 204, 180, 10);
  wall10.shapeColor = "blue";

  wall11 = createSprite(195, 58, 10, 120);
  wall11.shapeColor = "blue";

  wall12 = createSprite(60, 230, 10, 160);
  wall12.shapeColor = "blue";

  wall13 = createSprite(366, 244, 10, 80);
  wall13.shapeColor = "blue";

  wall14 = createSprite(190, 160, 80, 10);
  wall14.shapeColor = "blue";

  wall15 = createSprite(169, 336, 180, 10);
  wall15.shapeColor = "blue";

  wall16 = createSprite(220, 260, 10, 100);
  wall16.shapeColor = "blue";

  wall17 = createSprite(250, 100, 90, 10);
  wall17.shapeColor = "blue";

  wall18 = createSprite(315, 95, 10, 200);
  wall18.shapeColor = "blue";

  wall19 = createSprite(333, 237, 80, 10);
  wall19.shapeColor = "blue";

  wall20 = createSprite(278, 351, 80, 10);
  wall20.shapeColor = "blue";

  wall21 = createSprite(257, 302, 10, 80);
  wall21.shapeColor = "blue";

  wall22 = createSprite(382, 337, 60, 10);
  wall22.shapeColor = "blue"
}

function draw() {
  background(0);

  //homescreen page
  if (gameState === "home") {
    god.visible = false
    man.visible = false
    gcloud.visible = false
    mcloud.visible = false
    varanasi.visible = false
    man1.visible = false
    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false

    textSize(30);
    fill("yellow");
    stroke("black");
    text("Welcome to <name>!!", 200, 200)
    text("God is there to help us! She wants to talk with you", 100, 230)
    text("Press Right Arrow to have a conversation with her", 100, 260)

    //homescreen 1 code(visibility of god and man)
    if (keyDown(RIGHT_ARROW)) {
      gameState = "homescreen1"
    }

  }


  if (gameState === "homescreen1") {
    god.visible = true;
    man.visible = true;
    gcloud.visible = false
    mcloud.visible = false
    varanasi.visible = false
    man1.visible = false
    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false
    textSize(30)
    text("Press LEFT ARROW to Continue", 260, 350);

    if (keyDown(LEFT_ARROW)) {
      gameState = "conv1"
    }
  }



  //Conversation1 (man taking to god)
  if (gameState === "conv1") {
    mcloud.visible = true;
    //mcloud.depth = man.depth - 2;
    gcloud.visible = false;
    god.visible = true;
    man.visible = true;
   
    varanasi.visible = false
    man1.visible = false
    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false
    textSize(20)
    text("Hello God!!", 100, 170)
    text("Please guide me so that", 120, 190)
    text(" I can obtain salvation", 100, 210)
    textSize(30)
    text("Press DOWN ARROW to Continue", 260, 350);

    if (keyDown(DOWN_ARROW)) {
      gameState = "conv2"
    }
  }




  //Conversation2 (god taking to man)
  if (gameState === "conv2") {
    god.visible = true;
    man.visible = true;
    varanasi.visible = false
    man1.visible = false
    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false
    textSize(20)
    text("I will help you", 350, 150)
    mcloud.visible = false;
    gcloud.visible = true;
    textSize(30)
    text("Press UP ARROW to Continue", 260, 350);

    if (keyDown(UP_ARROW)) {
      gameState = "conv3"
    }
  }


  //Conversation3 (man taking to god)
  if (gameState === "conv3") {
    god.visible = true;
    man.visible = true;
    textSize(20)
    text("", 100, 150)
    mcloud.visible = true;
    gcloud.visible = false;
    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false


    textSize(30)

    text("Press ENTER to start Task", 260, 350)

    if (keyDown(ENTER)) {
      gameState = "level1"
    }
  }


  if (gameState === "level1") {
    god.visible = false;
    man.visible = false;
    gcloud.visible = false;
    mcloud.visible = false;
    varanasi.visible = false
    man1.visible = false
    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false
    textSize(20)
    fill("cyan")
    stroke("black")
    strokeWeight(3)
    text("You have to reach Varanasi and take a bath in Ganga river!", 100, 100)
    text("press G to reach Ganga river", 100, 200)

    if (keyDown("G")) {
      gameState = "level1.1"
    }
  }

  if (gameState === "level1.1") {

    //img1 = createImg("varanasi.gif");
    //image(img1,378,378,20,20)
    varanasi.visible = true
    man1.visible = true
    wall1.visible = true
    wall2.visible = true
    wall3.visible = true
    wall4.visible = true
    wall5.visible = true
    wall6.visible = true
    wall7.visible = true
    wall8.visible = true
    wall9.visible = true
    wall10.visible = true
    wall11.visible = true
    wall12.visible = true
    wall13.visible = true
    wall14.visible = true
    wall15.visible = true
    wall16.visible = true
    wall17.visible = true
    wall18.visible = true
    wall19.visible = true
    wall20.visible = true
    wall21.visible = true
    wall22.visible = true

    if (keyDown(UP_ARROW)) {
      man1.y=man1.y-2; 
    }


    if (keyDown(DOWN_ARROW)) {
     man1.y=man1.y+2;
    }


    if (keyDown(LEFT_ARROW)) {
     man1.x=man1.x-2;
    }


    if (keyDown(RIGHT_ARROW)) {
      man1.x=man1.x+2;
    }
    


    if (man1.isTouching(wall1) || man1.isTouching(wall2) ||
      man1.isTouching(wall3) || man1.isTouching(wall4) || man1.isTouching(wall5) ||
      man1.isTouching(wall6) || man1.isTouching(wall7) || man1.isTouching(wall8) ||
      man1.isTouching(wall9) || man1.isTouching(wall10) || man1.isTouching(wall11) ||
      man1.isTouching(wall12) || man1.isTouching(wall13) || man1.isTouching(wall14) ||
      man1.isTouching(wall15) || man1.isTouching(wall16) || man1.isTouching(wall17) ||
      man1.isTouching(wall18) || man1.isTouching(wall19) || man1.isTouching(wall20) ||
      man1.isTouching(wall21) || man1.isTouching(wall22)) {

      man1.x = 28;
      man1.y = 28;
      
      
    }


    if (man1.isTouching(varanasi)) {

      textSize(40);
      text("You Win", 150, 200);


      man1.x = 378;
      man1.y = 384;
      man1.velocityX = 0;
      man1.velocityY = 0;
    }
    // textSize(15);
    // text("Sophia", 5, 20);

    // textSize(16);
    // textFont("Arial Black");
    // text("Winner", 328, 375);

  }



  drawSprites();
}