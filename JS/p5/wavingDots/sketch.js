

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

    translate(0,size);

    for (var x = 0; x < noOfDots; x++){
      for (var y = 0; y < noOfDots; y++){

        // x & y coordenates
        var locX = x * width / noOfDots;
        var locY = y * height / noOfDots;

        // Generate a Color
        colorRandom = random(0,255)
        var c = color(colorRandom,0,colorRandom)

        // phase angle
        var phaseAngle = calculatePhaseAngle(locX,locY)

        // connecting dots
        drawConnectingDots(x,y,noOfDots,size/2)

        push()
        // animation effect
        translate(locX,locY)
        rotate(phaseAngle)
        // Create a wave
        wave(size/2,0,size/2,c);
        pop()
      }
    }
}

function calculatePhaseAngle(x,y){
  
  if(x == null || y == null) return 0

  var phaseRatio = mouseX / width * 4

  return ( frameCount + x + y ) * phaseRatio
}

function drawConnectingDots(x,y,noOfDots,size){

  var x1 = x * width / noOfDots ;
  var y1 = y * height / noOfDots;
  var x2;
  var y2;

  var phaseAngle1 = calculatePhaseAngle(x1,y1)
  var phaseAngle2;

  // vertical connecting lines
  if(y+1<noOfDots)
  {
    x2 = x * width / noOfDots;
    y2 = (y+1) * height / noOfDots;

    phaseAngle2 = calculatePhaseAngle(x2,y2)

    line(
      x1 + cos(phaseAngle1)*size,
      y1 + sin(phaseAngle1)*size,
      x2 + cos(phaseAngle2)*size,
      y2 + sin(phaseAngle2)*size)

  }
 
  //horizontal connecting lines
  if(x+1<noOfDots)
  {
    x2 = (x+1) * width / noOfDots;
    y2 = y * height / noOfDots

    phaseAngle2 = calculatePhaseAngle(x2,y2)

    line(
      x1 + cos(phaseAngle1)*size,
      y1 + sin(phaseAngle1)*size,
      x2 + cos(phaseAngle2)*size,
      y2 + sin(phaseAngle2)*size)
  }
}


function wave(x,y,size,color) {
 
  noStroke()
  fill(color)
  ellipse(x,y,size)
  
}
