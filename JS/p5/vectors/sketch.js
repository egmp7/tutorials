var ball
var balls = Array();

function setup() {
    createCanvas(900, 600);
    background(0)

    
    //ball = new Ball;

    for(var i=0 ; i<10 ; i++)
    {
        balls.push(new Ball);
    }
    
    

}

function draw() {


    for(var i=0 ; i<10 ; i++)
    {
        balls[i].run();
    }
}

class Ball{

    constructor(){
        this.velocity = new createVector( 0 , 0)
        //this.location = new createVector( width/2 , height/2)
        //this.prevLocation = new createVector( width/2 , height/2)
        this.acceleration = new createVector (0 , 0)
        this.maxVelocity = 5

        var randomX = width/2+random(-100,100);
        var randomY = height/2+random(-100,100);
        this.prevLocation = new createVector(randomX, randomY);
        this.location = new createVector( randomX, randomY )
    }

    run(){
        this.draw()
        this.move()
        //this.bounce()
        this.edges()
    }

    draw(){
        fill(255)
        stroke(255)
        line(this.location.x,this.location.y, this.prevLocation.x,this.prevLocation.y)
        this.prevLocation = this.location.copy();
        //ellipse(this.location.x,this.location.y,40,40)
    }

    move(){
        var mouse = createVector(mouseX,mouseY);
        var dir = p5.Vector.sub(mouse,this.location);
        dir.normalize();
        dir.mult(0.3);
        this.acceleration = dir;


        this.velocity.add(this.acceleration)
        this.velocity.limit(this.maxVelocity)
        this.location.add(this.velocity)
    }

    bounce(){
        if (this.location.x > width || this.location.x < 0) this.velocity.x *= -1
        if (this.location.y > height || this.location.y < 0) this.velocity.y *= -1 
    }

    edges(){

        if( this.location.x < 0 ) this.location.x = width;
        if( this.location.x > width ) this.location.x = 0;
        if( this.location.y < 0 ) this.location.y = height;
        if (this.location.y > height) this.location.y = 0; 
    }
}

function operations (){

    var mouse = createVector( mouseX, mouseY )
    var center = createVector( width/2, height/2 )

    // Addition
    //mouse.add(100,100)

    // Substraction
    mouse.sub(center);

    // Scalar
    mouse.mult(0.5);
    mouse.div(0.5);

    // Magnitud
    fill(255)
    strokeWeight(1)
    text(`magnitud: ${int(mouse.mag())}`,10,10)
    rect(10,20,mouse.mag(),10);

    // Normalization
    var normal = mouse.copy();
    text(`normal: ${normal.normalize()}`,10,40)
    normal.mult(100)
    line(10,50,normal.x,normal.y)

    stroke(255)
    translate(width/2, height/2)
    strokeWeight(3)
    line(0,0,mouse.x,mouse.y)

}