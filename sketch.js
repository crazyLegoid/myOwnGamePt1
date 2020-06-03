var player, ground;
var jumpCase = 0;
var stage = 1;

function setup() {
  createCanvas(800,400);
  player = new Player(20, 380, 20);
  ground = new Ground(400, 390, 800, 20);

}

function draw() {
  background("#c2b280");  
  player.display();
  player.update();
  player.move();
  player.check();

  ground.display();

  stageS();
  // ground.isTouching(player);
}

function keyPressed(){

  if(key === " " && jumpCase === 0){

    player.up();
    jumpCase = 1;

  }

}

function stageS(){

  if(stage === 1){

    var pillar = new Pillar(100, 280, 20, 100);
    pillar.isTouching(player);
    pillar.display(); 

  }

}
