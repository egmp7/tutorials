/**
 * Noise generation to create a blinking effect of the dots: 
 * I used noise generation instead of a random function because 
 * the noise has more control of the patterns to be drawn than 
 * the random function. This is great for future adjustments.
 * 
 * The map function was used to translate the values generated 
 * of the noise function (between 0 and 1) to integers 
 * between 100 and 255 that are used to generate the purple color
 * 
 * Further Development:
 * 
 * The style generates purple dots between 100 and 255 
 * points of color. This in conjunction with a black background
 * generates a stylish-looking wave.
 * 
 * I was able to connect the dots by applying the provided 
 * nested for loop. This gave me access to each of the wave dots.
 * The key to finding the next dot position was dividing the axis x & y
 * and providing a different phase angle. Then, I provide the line 
 * function with the respective coordinate using trigonometric functions 
 * such as sin and cos.
 */

// My code starts here ---------------->
var time = 100;
// My code ends here ---------------->

function setup(){
    createCanvas(500, 500);
    randomSeed(0)
    // My code starts here ---------------->
    angleMode(DEGREES)
    // My code ends here ---------------->
}

function draw(){

    background(0);
    // My code starts here ---------------->
    translate(0,size);
    // My code ends here ---------------->
    
    var noOfDots = 20;
    var size = width/noOfDots;

    
    for (var x = 0; x < noOfDots; x++){
      for (var y = 0; y < noOfDots; y++){

        // My code starts here ---------------->
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
        // My code ends here ---------------->
      }
    }
}

// My code starts here ---------------->

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
  nX = map(nX,0,1,100,255)
  time +=10
  return color(nX,0,nX)
}
// My code ends here ---------------->
