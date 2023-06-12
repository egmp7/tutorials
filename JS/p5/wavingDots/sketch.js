

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
        phaseRatio = mouseX / width;
        phaseAngle = ( frameCount + locX + locY ) * phaseRatio

        push()
        translate(cos(phaseAngle)* size,sin(phaseAngle)* size)
        stroke(255,0,0)
        // Create a wave
        wave( locX,
              locY, 
              size /2, 
              c); 
        pop()
      }
    }
    
}


function wave(x,y,size,color) // replace params with the necessary parameters
{
 
  noStroke()
  fill(color)
  ellipse(x,y,size)
  
}
