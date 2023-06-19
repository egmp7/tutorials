var imgs = [];
var avgImg;
var numOfImages = 30;
var selectedImg = 0;

//////////////////////////////////////////////////////////
function preload() { 

    // load images
    for (var i = 0 ; i < numOfImages ; i++){
        var img = `assets/${i}.jpg`
        imgs.push(loadImage(img))
    }
}
//////////////////////////////////////////////////////////
function setup() {
    createCanvas(imgs[0].width*2, imgs[0].height);
    pixelDensity(1);
    avgImg = createGraphics(imgs[0].width,imgs[0].height)
}
//////////////////////////////////////////////////////////
function draw() {
    background(125);
    //draw first image
    image(imgs[selectedImg],0,0)

    // load pixels
    for(var i = 0 ; i < numOfImages ; i++){
        imgs[i].loadPixels()
    }
    avgImg.loadPixels();

    // iterate each pixel
    for(var x = 0 ; x < imgs[0].width ; x ++){
        for(var y = 0 ; y < imgs[0].height ; y ++){

            // index formula
            var index = ((imgs[0].width * y) + x) * 4

            // sum of channels
            var sumR = 0;
            var sumG = 0;
            var sumB = 0;

            for(var i = 0 ; i < numOfImages ; i++){
                sumR += imgs[i].pixels[index + 0]
                sumG += imgs[i].pixels[index + 1]
                sumB += imgs[i].pixels[index + 2]
            }

            // set avgImg pixels
            avgImg.pixels[index + 0] = sumR/numOfImages;
            avgImg.pixels[index + 1] = sumG/numOfImages;
            avgImg.pixels[index + 2] = sumB/numOfImages;
            avgImg.pixels[index + 3] = 255;

        }
    }
    
    // draw avgImage
    avgImg.updatePixels()
    image(avgImg,width/2,0)
    noLoop();
}
//////////////////////////////////////////////////////////
function keyPressed(){
    selectedImg = int(random(0,numOfImages))

    // Switch left side face
    loop();
    image(imgs[selectedImg],0,0)
    drawAvgImage();
    noLoop()
}

function mouseMoved(){
    loop();
    image(imgs[selectedImg],0,0)
    drawAvgImage();
    noLoop();
}
//////////////////////////////////////////////////////////
function drawAvgImage(){
    // iterate each pixel
    for(var x = 0 ; x < imgs[0].width ; x ++){
        for(var y = 0 ; y < imgs[0].height ; y ++){

            var index = ((imgs[0].width * y) + x) * 4
            var ratio = mouseX/width;

            var redC = lerp(
                imgs[selectedImg].pixels[index],
                avgImg.pixels[index],
                ratio);

            var greenC = lerp(
                imgs[selectedImg].pixels[index+1],
                avgImg.pixels[index+1],
                ratio);

            var blueC = lerp(imgs[selectedImg].pixels[index+2],
                avgImg.pixels[index+2],
                ratio);

             // set avgImg pixels
            avgImg.pixels[index + 0] = redC;
            avgImg.pixels[index + 1] = greenC;
            avgImg.pixels[index + 2] = blueC;
            avgImg.pixels[index + 3] = 255;

        }
    }
    
    // draw avgImage
    avgImg.updatePixels()
    image(avgImg,width/2,0)
}

