function setup() {
    createCanvas(900, 600);
    background(0);
    angleMode(DEGREES)
}



function draw() {
    background(0);
    translate(width/2,height/2);
    

    // drawEllipses()
    // drawMovingCircle()
    drawOscillation()

    
}

function drawOscillation(){
    var amp = width/2
    var period = 60
    var phase = -60

    var freq = 2

    //var locX =  sin(360 * frameCount / period + phase) * amp

    var locX =  sin(frameCount * 6 * freq + phase) * amp

    fill(255)
    ellipse(locX,0,30,30)
}

function drawMovingCircle(){
    var radius = frameCount /10;
    var theta = frameCount

    var x = cos(theta) * radius;
    var y = sin(theta) * radius;
    noStroke()
    fill(255,0,0)
    ellipse(x,y,15)
    
}

function drawEllipses(){
    var radius = 200;
    for(var theta = 0 ; theta < 360 ; theta += 20){
        var x = cos(theta) * radius;
        var y = sin(theta) * radius;
        
        fill(255)
        ellipse(x,y,15)
    }
}
