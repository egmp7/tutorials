// Image of Husky Creative commons from Wikipedia:
// https://en.wikipedia.org/wiki/Dog#/media/File:Siberian_Husky_pho.jpg
var imgIn;
var matrix = [
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64]
];
/**************************
 * My code starts here
 **************************/
var checkboxes={}
/**************************
 * My code ends here
 **************************/

/////////////////////////////////////////////////////////////////
function preload() {
    imgIn = loadImage("assets/husky.jpg");
}
/////////////////////////////////////////////////////////////////
function setup() {
    createCanvas((imgIn.width * 2), imgIn.height);
    /**************************
     * My code starts here
     **************************/
    checkboxes.sepiaFilter = createCheckbox('Sepia Filter', false)
	checkboxes.sepiaFilter.changed( sepiaFilterEvent )
	checkboxes.darkCorners = createCheckbox('Dark Corners', false)
	checkboxes.darkCorners.changed( darkCornersEvent )
	checkboxes.radialBlurFilter = createCheckbox('Radial Blur Filter', false)
	checkboxes.radialBlurFilter.changed ( radialBlurFilterEvent )
	checkboxes.borderFilter = createCheckbox('Border Filter', false)
	checkboxes.borderFilter.changed( borderFilterEvent )
    /**************************
     * My code ends here
     **************************/
}
/////////////////////////////////////////////////////////////////
function draw() {
    background(125);
    image(imgIn, 0, 0);
    image(earlyBirdFilter(imgIn), imgIn.width, 0);
    noLoop();
}

/////////////////////////////////////////////////////////////////
function earlyBirdFilter(img){

	var resultImg = createImage(imgIn.width, imgIn.height);
	resultImg = img;

	// filters
	if( checkboxes.sepiaFilter.checked() ) resultImg = sepiaFilter(imgIn);
	if( checkboxes.darkCorners.checked() ) resultImg = darkCorners(resultImg);
	if( checkboxes.radialBlurFilter.checked() ) resultImg = radialBlurFilter(resultImg);
	if( checkboxes.borderFilter.checked() )resultImg = borderFilter(resultImg)

	return resultImg;
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

/////////////////////////////////////////////////////////////////
/**************************
 * My code starts here
 **************************/

/**
 * @param {p5.Image} img 
 * @returns {p5.Image} Sepia filtered image
 */
function sepiaFilter(img){
  var imgOut = createImage(img.width, img.height);
  
  img.loadPixels();
  imgOut.loadPixels();

  // read every pixel
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {

        var index = (x + y * img.width) * 4;

        // get RGB colors
        var oldR = img.pixels[index + 0];
        var oldG = img.pixels[index + 2];
        var oldB = img.pixels[index + 1];

        // create new RGB colors
        var newR = (oldR * .393) + (oldG *.769) + (oldB * .189);
        var newG = (oldR * .349) + (oldG *.686) + (oldB * .168);
        var newB = (oldR * .272) + (oldG *.534) + (oldB * .131);
  
        // set RGB colors
        imgOut.pixels[index + 0] = newR;
        imgOut.pixels[index + 1] = newG;
        imgOut.pixels[index + 2] = newB;
        imgOut.pixels[index + 3] = 255;
    }
  }
  imgOut.updatePixels();
  return imgOut;
}

/**
 * @param {p5.Image} img 
 * @returns {p5.Image} Dark Corners image
 */
function darkCorners(img){
	var imgOut = createImage(img.width, img.height);
	const maxDistanceFromCenter = dist(0,0,img.width/2,img.height/2)
	img.loadPixels();
	imgOut.loadPixels();

	// read every pixel
	for (var x = 0; x < img.width; x++) {
		for (var y = 0; y < img.height; y++) {

		var distanceFromCenter = dist(x,y,img.width/2,img.height/2)
		var index = (x + y * img.width) * 4;

		// get RGB colors
		var r = img.pixels[index + 0];
		var g = img.pixels[index + 1];
		var b = img.pixels[index + 2];

		var dynLum;

		// dark at 300 points from center
		if (distanceFromCenter >= 300){
			dynLum = map(distanceFromCenter,300,450,1,0.4);
			r = r * dynLum;
			g = g * dynLum;
			b = b * dynLum;
		}

		//dark at 450 points from center
		else if (distanceFromCenter >= 450){
			dynLum = map(distanceFromCenter,450,maxDistanceFromCenter,0.4,0);
			r = r * dynLum;
			g = g * dynLum;
			b = b * dynLum;
		}
	
		// set RGB colors
		imgOut.pixels[index + 0] = r;
		imgOut.pixels[index + 1] = g;
		imgOut.pixels[index + 2] = b;
		imgOut.pixels[index + 3] = 255;
		}
	}
	imgOut.updatePixels();
	return imgOut;
}

/**
 * Creates a radial blur of size 100 pixels,
 * gets updated when user clicks in the canvas
 * @param {p5.Image} img 
 * @returns {p5.Image} Blured Image
 */
function radialBlurFilter(img){
	var imgOut = createImage(img.width, img.height);
	var matrixSize = matrix.length;
	img.loadPixels();
	imgOut.loadPixels();

	// get mousePosition from color image
	const mousePosition = createVector(
		constrain(mouseX,0,imgIn.width),
		constrain(mouseY,0,imgIn.height))

	// read every pixel
	for (var x = 0; x < img.width; x++) {
		for (var y = 0; y < img.height; y++) {

		var index = (x + y * img.width) * 4;

		// get RGB colors from param img
		var r = img.pixels[index + 0];
		var g = img.pixels[index + 1];
		var b = img.pixels[index + 2];

		// calculate dynBlur
		var dynBlur;
		var distanceMouseToPixel = dist(mousePosition.x,mousePosition.y,x,y)
		if (distanceMouseToPixel < 100) dynBlur = 0;
		else dynBlur = map(constrain(distanceMouseToPixel,100,300),100,300,0,1);
		
		// convolution
		var c = convolution(x,y,matrix,matrixSize,img)

		// set RGB colors
		imgOut.pixels[index + 0] = c[0]*dynBlur + r*(1-dynBlur);
		imgOut.pixels[index + 1] = c[1]*dynBlur + g*(1-dynBlur);
		imgOut.pixels[index + 2] = c[2]*dynBlur + b*(1-dynBlur);
		imgOut.pixels[index + 3] = 255;
		}
	}

	imgOut.updatePixels();
	return imgOut;
}

/**
 * Creates a rounded border for the image
 * @param {p5.Image} img 
 * @returns {p5.Graphics} Blured Image
 */
function borderFilter(img){

	var buffer = createGraphics(img.width,img.height)
	buffer.image(img,0,0);
	
	// rounded border
	var weight = 20;
	buffer.strokeWeight(weight)
	buffer.stroke(255);
	buffer.fill(0,0,0,0);
	buffer.rect(weight/2,weight/2,img.width -weight/2,img.height-weight/2,50);
	buffer.rect(weight/2,weight/2,img.width -weight/2,img.height-weight/2);

	return buffer;
}

/////////////////////////////////////////////////////////////////
// EVENTS

function sepiaFilterEvent(){ loop(); }
function darkCornersEvent(){ loop(); }
function radialBlurFilterEvent(){ loop(); }
function borderFilterEvent(){ loop(); }
function mousePressed(){ loop(); }

/**************************
 * My code ends here
 **************************/





