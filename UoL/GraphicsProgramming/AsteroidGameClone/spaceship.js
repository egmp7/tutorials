class Spaceship {

  constructor(){
    this.velocity = new createVector(0, 0);
    this.location = new createVector(width/2, height/2);
    this.acceleration = new createVector(0, 0);
    this.maxVelocity = 5;
    this.bulletSys = new BulletSystem();
    this.size = 50;
  }

  run(){
    this.bulletSys.run();
    this.draw();
    this.move();
    this.edges();
    this.interaction();
  }

  draw(){
    fill(125);
    triangle(this.location.x - this.size/2, this.location.y + this.size/2,
        this.location.x + this.size/2, this.location.y + this.size/2,
        this.location.x, this.location.y - this.size/2);

  }

  move(){
      // My code starts here ---------------->
      this.velocity.add(this.acceleration)
      this.velocity.limit(this.maxVelocity)
      this.location.add(this.velocity);
      this.acceleration.mult(0);
      // My code ends here ---------------->
  }

  applyForce(f){
    this.acceleration.add(f);
  }

  interaction(){
      if (keyIsDown(LEFT_ARROW)){
        this.applyForce(createVector(-0.1, 0));
      }
      if (keyIsDown(RIGHT_ARROW)){
        // My code starts here ---------------->
        this.applyForce(createVector(0.1, 0));
        // My code ends here ---------------->
      }
      if (keyIsDown(UP_ARROW)){
        // My code starts here ---------------->
        this.applyForce(createVector(0, -0.1));
        // My code ends here ---------------->
      }
      if (keyIsDown(DOWN_ARROW)){
        // My code starts here ---------------->
        this.applyForce(createVector(0, 0.1));
        // My code ends here ---------------->
      }
  }

  fire(){
    this.bulletSys.fire(this.location.x, this.location.y);
  }

  edges(){
    if (this.location.x<0) this.location.x=width;
    else if (this.location.x>width) this.location.x = 0;
    else if (this.location.y<0) this.location.y = height;
    else if (this.location.y>height) this.location.y = 0;
  }

  setNearEarth(){
    // My code starts here ---------------->
    this.applyForce(createVector(0,0.05));
    var friction = this.velocity.copy()
    friction.mult(- 1/30)
    this.applyForce(friction);
    // My code ends here ---------------->
  }
}
