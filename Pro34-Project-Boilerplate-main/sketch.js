var bg,upbg
var player,tree
var stones = [];
var engine,world,canvas,angle

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
  bg = loadImage('assets/background.jpg')
  upbg = loadImage('assets/upbg.png')
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  angle = 1.6

  player = new Player(width-200,height-170,300,300,75,75*2,angle) 
  tree = new Tree(370,height-305,707,709)
  
  support = createSprite()
}


function draw() 
{
  background('cyan');
  Engine.update(engine);

  for (var i = 0; i < stones.length; i++) {
    showStones(stones[i]);
    
    // for (var j = 0; j < boats.length; j++) {
    //   if (stones[i] !== undefined && boats[j] !== undefined) {
    //     var collision = Matter.SAT.collides(balls[i].body, boats[j].body);
    //     if (collision.collided) {
    //       boats[j].remove(j);
    //       Matter.World.remove(world, balls[i].body);
    //       balls.splice(i, 1);
    //       i--;
    //     }
    //   }
    // }

  }
  

  player.show()
  tree.show()
  image(upbg,0,0,width,height)
}

function showStones(ball) {
  ball.display();
  ball.animate();
}

function keyPressed() {

  if (keyCode === 32) {
    var stone = new Stone(player.x,player.y);
    stone.trajectory = [];
    Matter.Body.setAngle(stone.body, player.angle);
    stones.push(stone);
  }
}

function keyReleased() {
  if (keyCode === 32) {
    //stones[stones.length - 1].shoot();
  }
}