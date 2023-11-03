var secLen = 160;
var secWidth = 1;
var minLen = 140;
var minWidth = 3;
var hourLength = 90;
var hourWidth = 5;

function setup() {
    createCanvas(900, 600);
    background(0);
}

function draw() {
    background(255)
    translate(width/2,height/2)
    ellipse(0,0,350)

    drawSec()
    drawMin()
    drawHours()
    drawSticks()
}

function drawSec(){
    push()
    
    strokeWeight(secWidth)
    stroke(200,0,0)
    var angle = map(second(),0,60,0,360)
    rotate(radians(angle))
    line (0,0,0,-secLen)

    pop()
}

function drawMin(){
    push()
    
    strokeWeight(minWidth)
    stroke(0,200,0)
    var angle = map(minute(),0,60,0,360)
    rotate(radians(angle))
    line (0,0,0,-minLen)

    pop()
}

function drawHours(){
    push()
    
    strokeWeight(hourWidth)
    stroke(0,200,0)
    var angle = map(hour(),0,12,0,360)
    rotate(radians(angle))
    line (0,0,0,-hourLength)

        push()

        translate(0,-hourLength)
        ellipse(0,0,10)
        pop()

    pop()
}

function drawSticks(){

    var hours =12
    var hourStep = 360 / hours;

    for (var i = 0 ; i < hours ; i++)
    {
        push()
        rotate (radians(hourStep * i))
        translate (0, -155)
        line(0,0,0,-20)
        pop()

    }
}
