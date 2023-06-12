

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

        // connecting dots
        drawConnectingDots(x,y,noOfDots,size/2,phaseAngle)

        push()
        // animation effect
        translate(locX,locY)
        rotate(phaseAngle)
        // Create a wave
        wave(size/2,size/2,size/2,c);
        pop()
      }
    }
    
}

function drawConnectingDots(x,y,noOfDots,size,phaseAngle){

  var x1 = x * width / noOfDots;
  var y1 = y * height / noOfDots;
  var x2;
  var y2;
  push()
  translate(size,size)

  // vertical connecting lines
  x2 = x * width / noOfDots;
  y2 = y+1 * height / noOfDots;
  line(x1,y1,x2,y2)

  // horizontal connecting lines
  x2 = x+1 * width / noOfDots;
  y2 = y * height / noOfDots;
  line(x1,y1,x2,y2)
  pop()

}


function wave(x,y,size,color) {
 
  noStroke()
  fill(color)
  ellipse(x,y,size)
  
}
