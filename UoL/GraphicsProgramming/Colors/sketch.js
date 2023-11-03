var video;

function setup() {
    createCanvas(640,480);
    pixelDensity(1);
    video = createCapture(VIDEO)
    video.hide()
    //colorsLecture();

}

function draw() {
    background(255)

    imageMode(CENTER)
    translate(width/2,height/2)
    scale(-1,1,1)
    image(video,0,0)
    
}

function colorsLecture(){

    createCanvas(500, 500);
    colorMode(RGB);

    for(var i = 0 ; i< 255 ; i++)
    {
        for(var j = 0 ; j< 255 ; j++){
            stroke(i,j,0)
            point(i,j)
        }
    }

    translate(0,300)
    colorMode(HSB);

    // colors
    for(var i = 0 ; i< 360 ; i++)
    {
        // saturation
        for(var j = 0 ; j< 100 ; j++){
            stroke(i,j,100)
            point(i,j)
        }
    }


    noLoop();

}
