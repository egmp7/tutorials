function setup() {
    createCanvas(900, 600);
    background(0);
    randomSeed(0);
}

function draw() {
    noStroke
    fill(255,0,0,random(255))
    dotX=random(width)
    dotY=random(height)
    size=random(15,25)
    ellipse(dotX,dotY,size)
}
