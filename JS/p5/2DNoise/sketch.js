function setup() {
    createCanvas(200, 200);
    background(0);
}

function draw() {
    background(0)
    //randomGrid()

    noiseGrid()
   
}

function noiseGrid(){
    for (var i =0; i<width; i++ )
    {
        for (var j =0 ; j< height; j++){
            var n = noise(i/10,j/10,frameCount/5)
            var c = map(n,0,1,0,255)
            stroke(c)
            point(i,j)
        }
    }
}

function randomGrid(){
    for (var i =0; i<width; i++ )
    {
        for (var j =0 ; j< height; j++){
            var c = random(0,255)
            stroke(c)
            point(i,j)
        }
    }
}
