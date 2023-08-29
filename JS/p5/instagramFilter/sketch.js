// Image of Husky Creative commons from Wikipedia:
// https://en.wikipedia.org/wiki/Dog#/media/File:Siberian_Husky_pho.jpg
/**
 * Instagram Filter app. 
 * An application that processes pixels of a source image.
 * The user can apply color filters, dark corners effects, 
 * radial blur filters and borders.
 * 
 * The radio buttons under 'General Tasks' let the user 
 * apply each effect into the source image,the changes 
 * can be noticed in real time
 * 
 * The selectors control the filter color and the radial 
 * blur matrix respectively. Play with each selector to 
 * notice the changes
 * 
 * Finally, the sliders control the border Weight, and 
 * the dark corner radius respectively
 */

var imgIn;

/**************************
 * My code starts here
 **************************/
var checkboxes={}
var borderSlider;
var darkCornersSlider;
var matrixSelector;
var matrix = [[
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64]
],[
	[1/9, 1/9, 1/9],
	[1/9, 1/9, 1/9],
	[1/9, 1/9, 1/9]
],[
	[1/16, 1/16, 1/16, 1/16],
	[1/16, 1/16, 1/16, 1/16],
	[1/16, 1/16, 1/16, 1/16],
	[1/16, 1/16, 1/16, 1/16]
]];

var filterSelector;
var colors=[[	.393, .769, .189, 
				.349, .686, .168,
				.272, .534, .131],
			[	.233, .566, .400,
				.600, .222, .100,
				.323, .432, .324],
			[	.100, .200, .300,
				.400, .500, .600,
				.700, .800, .900],
			[	.350, .500, .350,
				.100, .550, .400,
				.050, .400, .050]]

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

	createP('Instagram Filter app. An application that processes pixels of a source image. The user can apply color filters, dark corners effects, radial blur filters and borders.')
	createP('The radio buttons under "General Tasks" let the user apply each effect into the source image,the changes can be noticed in real time')
	createP('The selectors control the filter color and the radial blur matrix respectively. Play with each selector to notice the changes')
	createP('Finally, the sliders control the border Weight, and the dark corner radius respectively')

	// checkboxes
	createP('General tasks:')
    checkboxes.sepiaFilter = createCheckbox('Sepia Filter', false)
	checkboxes.sepiaFilter.changed( sepiaFilterEvent )
	checkboxes.darkCorners = createCheckbox('Dark Corners', false)
	checkboxes.darkCorners.changed( darkCornersEvent )
	checkboxes.radialBlurFilter = createCheckbox('Radial Blur Filter', false)
	checkboxes.radialBlurFilter.changed ( radialBlurFilterEvent )
	checkboxes.borderFilter = createCheckbox('Border Filter', false)
	checkboxes.borderFilter.changed( borderFilterEvent )

	// color selector
	createP('Filter Selector')
	filterSelector = createSelect();
	filterSelector.option('Sepia filter', 0);
	filterSelector.option('Weird filter', 1);
	filterSelector.option('Crescendo filter', 2);
	filterSelector.option('Stable filter', 3);
	filterSelector.changed( filterSelectorEvent );

	// matrix selector
	createP('Matrix Selector')
	matrixSelector = createSelect();
	matrixSelector.option('8 x 8',0);
	matrixSelector.option('3 x 3',1);
	matrixSelector.option('4 x 4',2);
	matrixSelector.changed( matrixSelectorEvent );

	// border Slider
	createP('Border Weight');
	borderSlider = createSlider(18, 54, 20);
	borderSlider.changed(borderSliderEvent);

	// dark corner Slider
	createP('Dark corner radius');
	darkCornersSlider = createSlider(200, 400, 300);
	darkCornersSlider.changed(darkCornersSliderEvent)

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
		var v = filterSelector.value()
        var newR = (oldR * colors[v][0]) + (oldG * colors[v][1]) + (oldB * colors[v][2]);
        var newG = (oldR * colors[v][3]) + (oldG * colors[v][4]) + (oldB * colors[v][5]);
        var newB = (oldR * colors[v][6]) + (oldG * colors[v][7]) + (oldB * colors[v][8]);
  
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
	const darkerDistance = 150;
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
		if (distanceFromCenter >= darkCornersSlider.value()){
			dynLum = map(distanceFromCenter,
				darkCornersSlider.value(),
				darkCornersSlider.value()+ darkerDistance,
				1,
				0.4);
			r = r * dynLum;
			g = g * dynLum;
			b = b * dynLum;
		}

		//dark at 450 points from center
		else if (distanceFromCenter >= darkCornersSlider.value()+darkerDistance){
			dynLum = map(
				distanceFromCenter,
				darkCornersSlider.value()+darkerDistance,
				maxDistanceFromCenter,
				0.4,
				0);
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
	var matrixSize = matrix[matrixSelector.value()].length;
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
		var c = convolution(x,y,matrix[matrixSelector.value()],matrixSize,img)

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
	var weight = borderSlider.value();
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
function filterSelectorEvent(){ loop()}
function matrixSelectorEvent(){ loop()}
function borderSliderEvent(){loop()}
function darkCornersSliderEvent(){loop()}

/**************************
 * My code ends here
 **************************/
