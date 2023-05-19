function setup() {
    createCanvas(900, 600);
    background(0);
    rectMode(CENTER);
}

function draw() {
    
    background(0);
    
    //translation( mouseX, mouseY )
    //rotate1()
    //rotate2()
    //rotate3()   // recMode(CENTER)
    pushAndPop()  // recMode(CENTER)
}

function translation( x , y ){
    
    translate( x , y )

    fill(255)
    rect(0,0,30,70)
    rect(-30,40,30,30)
    rect(30,40,30,30)
}

function rotate1(){
    fill(255)
    rect(200,100,50,50)

    fill(100)
    rotate(frameCount/100)
    translate (200,100)
    rect(0,0,50,50)
}

function rotate2(){
    fill(255)
    rect(200,100,50,50)

    fill(100)
    translate (200,100)
    rotate(frameCount/100)
    rect(0,0,50,50)
}

function rotate3(){
    fill(255)
    rect(200,100,50,50)

    fill(100)
    translate (200,100)
    scale(0.5,0.5)
    rotate(frameCount/100)
    rect(0,0,50,50)
}

function pushAndPop(){
    fill(255)
    translate(200,200)
    rotate(frameCount/100)
    rect(0,0,200,200)

    fill(100)

    push()
    translate(100,100)
    ellipse(0,0,30)
    pop()

    push()
    translate(-100,-100)
    ellipse(0,0,30)
    pop()
}