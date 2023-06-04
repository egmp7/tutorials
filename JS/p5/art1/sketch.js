function setup() {
    createCanvas(900, 600);
    background(0);
    randomSeed(0);
    rectMode(CENTER);
}

function draw() {
    //randomExample()
    noiseExample()
}

var time = 1000;
function noiseExample(){
    background(0)

    var nX = noise(time)
    var locX = map(nX,0,1,0,width)
    var g = map(nX,0,1,0,255)
    var rotZ = map(nX,0,1,-25,25)

    var nY = noise(time+5)
    var locY = map(nY,0,1,0,height)

    translate(locX,locY)
    rotate(rotZ);
    fill(0,g,0)
    rect(0,0,100,100)
    time += 0.001;
}

function randomExample(){
    noStroke
    fill(255,0,0,random(255))
    dotX=random(width)
    dotY=random(height)
    size=random(15,25)
    ellipse(dotX,dotY,size)
}
