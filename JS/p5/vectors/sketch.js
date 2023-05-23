var ball

function setup() {
    createCanvas(900, 600);
    ball = new Ball;
}

function draw() {
    background(0)
    //ball.run()
    substract()
   
}

function substract (){

    var mouse = createVector( mouseX, mouseY )
    var center = createVector( width/2, height/2 )

    mouse.sub(center);

    stroke(255)
    translate(width/2, height/2)
    strokeWeight(3)
    line(0,0,mouse.x,mouse.y)

}



class Ball{

    constructor(){
        this.velocity = new createVector( random (-2,2) , random(-2,2))
        this.location = new createVector( random(width) , random(height))
    }

    run(){
        this.draw()
        this.move()
        this.bounce()
    }

    draw(){
        fill(255)
        ellipse(this.location.x,this.location.y,40,40)
    }

    move(){
        this.location.add(this.velocity)
    }

    bounce(){
        if (this.location.x > width || this.location.x < 0) this.velocity.x *= -1
        if (this.location.y > height || this.location.y < 0) this.velocity.y *= -1 
    }
}