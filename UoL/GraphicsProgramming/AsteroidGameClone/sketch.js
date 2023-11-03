var spaceship;
var asteroids;
var atmosphereLoc;
var atmosphereSize;
var earthLoc;
var earthSize;
var starLocs = [];
var score;

//////////////////////////////////////////////////
function setup() {
  createCanvas(1000,600);
  spaceship = new Spaceship();
  asteroids = new AsteroidSystem();
  // My code starts here ---------------->
  score = new Score();
  // My code ends here ------------------>

  //location and size of earth and its atmosphere
  atmosphereLoc = new createVector(width/2, height*3.15);
  atmosphereSize = new createVector(width*3, width*3);
  earthLoc = new createVector(width/2, height*3.35);
  earthSize = new createVector(width*3, width*3);
}

//////////////////////////////////////////////////
function draw() {
  background(0);
  sky(); 

  spaceship.run();
  asteroids.run();
  // My code starts here ---------------->
  score.draw();
  // My code ends here ------------------>

  drawEarth();
  checkCollisions(spaceship, asteroids); // function that checks collision between various elements
}

//////////////////////////////////////////////////
//draws earth and atmosphere
function drawEarth(){
  noStroke();
  //draw atmosphere
  fill(0,0,255, 50);
  ellipse(atmosphereLoc.x, atmosphereLoc.y, atmosphereSize.x,  atmosphereSize.y);
  //draw earth
  fill(100,255);
  ellipse(earthLoc.x, earthLoc.y, earthSize.x, earthSize.y);
}

//////////////////////////////////////////////////
//checks collisions between all types of bodies
function checkCollisions(spaceship, asteroids){

    // My code starts here ---------------->
    for( var i=0 ; i<asteroids.locations.length ; i++){
      //spaceship-2-asteroid collisions
      if(isInside(asteroids.locations[i],asteroids.diams[i],spaceship.location,spaceship.size/2)) gameOver()
      //asteroid-2-earth collisions
      if(isInside(asteroids.locations[i],asteroids.diams[i],earthLoc,earthSize.x)) gameOver()
      //bullet collisions
      for( var j=0 ; j<spaceship.bulletSys.bullets.length ; j++){
        if(isInside(asteroids.locations[i],asteroids.diams[i],spaceship.bulletSys.bullets[j],spaceship.bulletSys.diam)) {
          asteroids.destroy(i)
          score.add();
        }
      }
    }
    //spaceship-2-earth
    if(isInside(spaceship.location,spaceship.size,earthLoc,earthSize.x)) gameOver()
    //spaceship-2-atmosphere
    if(isInside(spaceship.location,spaceship.size,atmosphereLoc,atmosphereSize.x)) spaceship.setNearEarth()
    // My code ends here ---------------->
}

//////////////////////////////////////////////////
//helper function checking if there's collision between object A and object B
function isInside(locA, sizeA, locB, sizeB){
    // My code starts here ---------------->
    if (locB == undefined || locA == undefined || sizeB == undefined || sizeA == undefined) return false 
    if(dist(locA.x,locA.y,locB.x,locB.y) < (sizeA/2 + sizeB/2) ) return true;
    return false;
    // My code ends here ---------------->
}

//////////////////////////////////////////////////
function keyPressed(){
  if (keyIsPressed && keyCode === 32){ // if spacebar is pressed, fire!
    spaceship.fire();
  }
}

//////////////////////////////////////////////////
// function that ends the game by stopping the loops and displaying "Game Over"
function gameOver(){
  fill(255);
  textSize(80);
  textAlign(CENTER);
  text("GAME OVER", width/2, height/2)
  noLoop();
}

//////////////////////////////////////////////////
// function that creates a star lit sky
function sky(){
  push();
  while (starLocs.length<300){
    starLocs.push(new createVector(random(width), random(height)));
  }
  fill(255);
  for (var i=0; i<starLocs.length; i++){
    rect(starLocs[i].x, starLocs[i].y,2,2);
  }

  if (random(1)<0.3) starLocs.splice(int(random(starLocs.length)),1);
  pop();
}
