function setup() {
  createCanvas(windowWidth,windowHeight);
  Dev = createSprite(400, 200, 50, 50);
  Rbutton = createButton("→");
  Lbutton = createButton("←");
  Ubutton = createButton("↑");
  Dbutton = createButton("↓");
  Rbutton.position(windowWidth*7/8,windowHeight*7/8);
  Dbutton.position(windowWidth*5/6,windowHeight*7/8);
  Lbutton.position(windowWidth/20,windowHeight*7/8);
  Ubutton.position(windowWidth/10,windowHeight*7/8);
}

function draw() {
  background(255,255,255);  
  Rbutton.mousePressed(()=>{
    Dev.velocityX = 4
  })
  


  drawSprites();
}