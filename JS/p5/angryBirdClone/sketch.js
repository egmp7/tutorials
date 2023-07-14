/** Extension: The cannon class shoots 10 birds when pressing the key "f".
 * The size of these birds are smaller compared to the regular yellow birds. 
 * The user can only shoot one time during the game, the idea behind was to give the 
 * player an extra weapon to move the boxes. I used the Framecount property from p5 to 
 * produce a burst of birds bullets. As well as. ellipse Bodies from Matter to create 
 * the instances of the bird. Then to give the direction of the bird I applied the method
 * "ApplyForce". This method required a vector that became the velocity of the bird.
 * This vector has a value of {x:0.07,y:0}, and creates the effect of shooting birds to the wall */


// Example is based on examples from: http://brm.io/matter-js/, https://github.com/shiffman/p5-matter
// add also Benedict Gross credit

var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Constraint = Matter.Constraint;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;

var engine;
var propeller;
var boxes = [];
var birds = [];
var colors = [];
var ground;
var slingshotBird, slingshotConstraint;
var angle=0;
var angleSpeed=0;
var canvas;
// My code starts here ------------>
var cannon;
var game;
// My code ends here ------------>

////////////////////////////////////////////////////////////
function setup() {
  canvas = createCanvas(1000, 600);

  engine = Engine.create();  // create an engine

  setupGround();

  setupPropeller();

  setupTower();

  setupSlingshot();

  setupMouseInteraction();

  //My code starts here ------------>
  game =  new Game;
  cannon = new Cannon;
  // My code ends here ------------>
}
////////////////////////////////////////////////////////////
function draw() {
  background(0);

  Engine.update(engine);

  drawGround();

  drawPropeller();

  drawTower();

  drawBirds();

  drawSlingshot();
  
  // My code starts here ------------>
  cannon.run();
  game.run();
  // My code ends here -------------->
}
////////////////////////////////////////////////////////////
//use arrow keys to control propeller
function keyPressed(){
  if (keyCode == LEFT_ARROW){
    // My code starts here ------------>
    angleSpeed += 0.01;
    // My code ends here -------------->
  }
  else if (keyCode == RIGHT_ARROW){
    // My code starts here ------------>
    angleSpeed -= 0.01;
    // My code ends here -------------->
  }
}
////////////////////////////////////////////////////////////
function keyTyped(){
  //if 'b' create a new bird to use with propeller
  if (key==='b'){
    setupBird();
  }

  //if 'r' reset the slingshot
  if (key==='r'){
    removeFromWorld(slingshotBird);
    removeFromWorld(slingshotConstraint);
    setupSlingshot();
  }

  // My code starts here ------------>
  console.log("This is my code")
  if (key == 'f'){
    cannon.fire()
  }
  // My code ends here -------------->
}

//**********************************************************************
//  HELPER FUNCTIONS - DO NOT WRITE BELOW THIS line
//**********************************************************************

//if mouse is released destroy slingshot constraint so that
//slingshot bird can fly off
function mouseReleased(){
  setTimeout(() => {
    slingshotConstraint.bodyB = null;
    slingshotConstraint.pointA = { x: 0, y: 0 };
  }, 100);
}
////////////////////////////////////////////////////////////
//tells you if a body is off-screen
function isOffScreen(body){
  var pos = body.position;
  return (pos.y > height || pos.x<0 || pos.x>width);
}
////////////////////////////////////////////////////////////
//removes a body from the physics world
function removeFromWorld(body) {
  World.remove(engine.world, body);
}
////////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
////////////////////////////////////////////////////////////
function drawConstraint(constraint) {
  push();
  var offsetA = constraint.pointA;
  var posA = {x:0, y:0};
  if (constraint.bodyA) {
    posA = constraint.bodyA.position;
  }
  var offsetB = constraint.pointB;
  var posB = {x:0, y:0};
  if (constraint.bodyB) {
    posB = constraint.bodyB.position;
  }
  strokeWeight(5);
  stroke(255);
  line(
    posA.x + offsetA.x,
    posA.y + offsetA.y,
    posB.x + offsetB.x,
    posB.y + offsetB.y
  );
  pop();
}
