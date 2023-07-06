/////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
/////////////////////////////////////
// code adapted from Coding Train (https://thecodingtrain.com/)
// released under MIT license by Daniel Shiffman

// Sea nettles image is taken from Wikipedia
// it is released under a creative commons license:
// https://es.wikipedia.org/wiki/Chrysaora#/media/Archivo:Six-Sea-Nettles.jpg
var imgIn;
var matrix =    [[1/9,1/9,1/9,],
                [1/9,1/9,1/9,],
                [1/9,1/9,1/9,]];

var matrixX = [[-1,-2,-1],[0,0,0],[1,2,1]];
var matrixY = [[-1,0,1],[-2,0,2],[-1,0,1]];

function preload() {
    imgIn = loadImage("assets/seaNettles.jpg");
}
/////////////////////////////////////////////////////////////
function setup() {
    createCanvas((imgIn.width * 2) + 20, imgIn.height);
    pixelDensity(1);
    imgIn.filter(GRAY)
}
/////////////////////////////////////////////////////////////
function draw() {
    background(255);

    
    image(imgIn, 0, 0);
    image(blur(imgIn), imgIn.width + 20, 0);

    noLoop();
}
/////////////////////////////////////////////////////////////
function blur(img){
  var imgOut = createImage(img.width, img.height);

  imgOut.loadPixels();
  img.loadPixels();

  // read every pixel
  for (var x = 0; x < imgOut.width; x++) {
    for (var y = 0; y < imgOut.height; y++) {

        var index = (x + y * imgOut.width) * 4;
        var matrixSize = matrix.length;

        var cX = convolution(x, y, matrixX, matrixSize, img)
        var cY = convolution(x, y, matrixY, matrixSize, img)

        cX = map(abs(cX[0]),0,1020,0,255);
        cY = map(abs(cY[0]),0,1020,0,255);

        var c = cX + cY


        //var c = convolution(x, y, matrix, matrixSize, img)

        imgOut.pixels[index + 0] = c;
        imgOut.pixels[index + 1] = c;
        imgOut.pixels[index + 2] = c;
        imgOut.pixels[index + 3] = 255;
    }
  }
  imgOut.updatePixels();
  return imgOut;
}

function convolution(x,y,matrix,matrixSize,img){
    var totalRed = 0.0;
    var totalGreen = 0.0;
    var totalBlue = 0.0;
    var offset = floor(matrixSize / 2);

    for(var i = 0 ; i < matrixSize; i++){
        for(var j = 0 ; j < matrixSize; j++){
            var xloc = x + i - offset;
            var yloc = y + j - offset;

            var index = (xloc + img.width * yloc) * 4;
            index = constrain(index, 0, img.pixels.length - 1);

            totalRed += img.pixels[index + 0] * matrix[i][j];
            totalGreen += img.pixels[index + 1] * matrix[i][j];
            totalBlue += img.pixels[index + 2] * matrix[i][j];
        }
    }

    return [totalRed,totalGreen,totalBlue]
}
