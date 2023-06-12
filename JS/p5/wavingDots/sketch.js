

function setup(){
    createCanvas(500, 500);
    background(255);
    randomSeed(0)
    angleMode(DEGREES)
    
}

function draw(){

    background(255);
    
    var noOfDots = 20;
    var size = width/noOfDots;

    for (var x = 0; x < noOfDots; x++){
      for (var y = 0; y < noOfDots; y++){

        // x & y coordenates
        var locX = x * width / noOfDots;
        var locY = y * height / noOfDots;

        // Generate a Color
        colorRandom = random(0,255)
        var c = color(colorRandom,0,colorRandom)

        // phase angle
        phaseRatio = mouseX / width * 4;
        phaseAngle = ( frameCount + locX + locY ) * phaseRatio

        push()
        // animation effect
        translate(locX,locY)
        rotate(phaseAngle)
        // Create a wave
        wave(10,10,size/2,c);
        pop()
      }
    }
    
}


function wave(x,y,size,color) {
 
  noStroke()
  fill(color)
  ellipse(x,y,size)
  
}
