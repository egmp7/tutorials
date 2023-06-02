////////////////////////////////////////////////////////////////
function setupGround(){
  ground = Bodies.rectangle(500, 600, 1000, 40, {
    isStatic: true, angle: 0
  });
  World.add(engine.world, [ground]);
}

////////////////////////////////////////////////////////////////
function drawGround(){
  push();
  fill(128);
  drawVertices(ground.vertices);
  pop();
}
////////////////////////////////////////////////////////////////
function setupPropeller(){
  // your code here
  propeller = Bodies.rectangle(150, 480, 200, 15, {
    isStatic: true, angle: angle
  });

  World.add(engine.world, propeller);
}
////////////////////////////////////////////////////////////////
//updates and draws the propeller
function drawPropeller(){
  Body.setAngle(propeller,angle)
  Body.setAngularVelocity(propeller,angleSpeed)
  angle += angleSpeed;
  fill(255);
  drawVertices(propeller.vertices)
}
////////////////////////////////////////////////////////////////
function setupBird(){
  var bird = Bodies.circle(mouseX, mouseY, 20, {friction: 0,
      restitution: 0.95 });
  Matter.Body.setMass(bird, bird.mass*10);
  World.add(engine.world, [bird]);
  birds.push(bird);
}
////////////////////////////////////////////////////////////////
function drawBirds(){
  for(var i = 0; i < birds.length ; i++){
    fill(255,255,0)
    drawVertices(birds[i].vertices)
    if(isOffScreen(birds[i])){
      World.remove(engine.world,birds[i])
      birds.splice(i,1)
      i--;
    }
  }
}
////////////////////////////////////////////////////////////////
//creates a tower of boxes
function setupTower(){
  //you code here
  for(var i =0 ; i<3; i++){
    for(var j =0 ; j<6; j++){
      var b = Bodies.rectangle(
        600+i*80,
        100+j*80,
        80,
        80,
        {restitution:0.8,friction:0.001})
      boxes.push({ box:b , color:color(0,random(100,255),0) })
      World.add(engine.world,[b])
    }
  }
}
////////////////////////////////////////////////////////////////
//draws tower of boxes
function drawTower(){
  for(var i =0 ; i<boxes.length; i++){
    fill(boxes[i].color)
    drawVertices(boxes[i].box.vertices)
    if(isOffScreen(boxes[i].box)){
      World.remove(engine.world,boxes[i])
      boxes.splice(i,1)
      i--;
    }
  }
}
////////////////////////////////////////////////////////////////
function setupSlingshot(){
//your code here
  slingshotBird = Bodies.circle(100,100,20,{friction: 0,
    restitution: 0.95 })
  Matter.Body.setMass(slingshotBird, slingshotBird.mass*10);
  slingshotConstraint = Constraint.create(
    {
      pointA: {x:150,y:90},
      bodyB: slingshotBird, 
      pointB: {x:0,y:0},
      stiffness: 0.01,
      damping: 0.001
    }
  )

  World.add(engine.world, [slingshotBird,slingshotConstraint]);
}
////////////////////////////////////////////////////////////////
//draws slingshot bird and its constraint
function drawSlingshot(){
  fill(255,0,0)
  drawVertices(slingshotBird.vertices)
  drawConstraint(slingshotConstraint)
  push();
  // your code here
  pop();
}
/////////////////////////////////////////////////////////////////
function setupMouseInteraction(){
  var mouse = Mouse.create(canvas.elt);
  var mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);
}
