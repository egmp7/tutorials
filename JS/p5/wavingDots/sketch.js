var time = 100;

function setup(){
    createCanvas(500, 500);
    randomSeed(0)
    angleMode(DEGREES)
}

function draw(){

    background(0);
    translate(0,size);
    
    var noOfDots = 20;
    var size = width/noOfDots;

    
    for (var x = 0; x < noOfDots; x++){
      for (var y = 0; y < noOfDots; y++){

        // x & y coordenates
        var locX = x * width / noOfDots;
        var locY = y * height / noOfDots;

        // Generate a Color
        colorRandom = random(100,255)
        var c = noiseColorGenerator()

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

/** Calculates the phase angle depending 
 * on the position of the Mouse, frameCount, 
 * x & y position
 * @param x int coordenate
 * @param y int coordenate
 * @returns float */
function calculatePhaseAngle(x,y){
  
  if(x == null || y == null) return 0

  var phaseRatio = mouseX / width * 4

  return ( frameCount + x + y ) * phaseRatio
}

/** 
 * Algorithm to connect each of the ellipses of the wave 
 * with a line function
 * 
 * @param x coordenate x from each ellipse of the wave,
 * @param y coordenate y from each ellipse of the wave,
 * @param noOfDots total number of ellipse in one row,
 * @param amplitude defined variable size from the draw function
 */
function drawConnectingDots(x,y,noOfDots,amplitude){

  stroke(noiseColorGenerator())

  // get first point
  var x1 = x * width / noOfDots ;
  var y1 = y * height / noOfDots;
  var x2;
  var y2;

  var phaseAngle1 = calculatePhaseAngle(x1,y1)
  var phaseAngle2;

  // vertical connecting lines
  if(y+1<noOfDots)
  {
    // get second point
    x2 = x1;
    y2 = (y+1) * height / noOfDots;

    phaseAngle2 = calculatePhaseAngle(x2,y2)

    line(
      x1 + cos(phaseAngle1)*amplitude,
      y1 + sin(phaseAngle1)*amplitude,
      x2 + cos(phaseAngle2)*amplitude,
      y2 + sin(phaseAngle2)*amplitude)
  }
 
  //horizontal connecting lines
  if(x+1<noOfDots)
  {
    // get second point
    x2 = (x+1) * width / noOfDots;
    y2 = y1;

    phaseAngle2 = calculatePhaseAngle(x2,y2)

    line(
      x1 + cos(phaseAngle1)*amplitude,
      y1 + sin(phaseAngle1)*amplitude,
      x2 + cos(phaseAngle2)*amplitude,
      y2 + sin(phaseAngle2)*amplitude)
  }
}

/** Draws an ellipse */
function wave(x,y,size,color) {
 
  noStroke()
  fill(color)
  ellipse(x,y,size)
  
}

/** Generates shades of purple through noise
 * @returns color
 */
function noiseColorGenerator(){
  var nX = noise(time)
  nX = map(nX,0,1,100,250)
  time +=10
  return color(nX,0,nX)
}
