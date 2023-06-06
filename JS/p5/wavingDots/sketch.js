

function setup()
{
    createCanvas(500, 500);
    background(255);
    randomSeed(0)
}

var time = 100;
function draw()
{
    background(255);

    var noOfDots = 20;
    var size = width/noOfDots;

    for (var x = 0; x < noOfDots; x++)
    {
      for (var y = 0; y < noOfDots; y++)
      {
        // your code here

        colorRandom = random(0,255)

        var nX = noise(time)
        var colorNoise = map(nX,0,1,0,255)
        var c = color(colorRandom,0,colorRandom)
        
        wave( x * width / noOfDots,
              y * height / noOfDots, 
              size /2, 
              c); 

        time+= 0.01;
        
      }
    }
    
}


function wave(x,y,size,color) // replace params with the necessary parameters
{
 
  noStroke()
  fill(color)
  ellipse(x,y,size)
  
 // your code here
}
