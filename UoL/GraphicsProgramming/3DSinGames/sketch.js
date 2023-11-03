// ****** My code starts here
var confLocs = [];
var confTheta = [];
var sliderHeight;
var sliderSpeed;
// ****** My code ends here

function setup() {
    createCanvas(900, 800, WEBGL);
    angleMode(DEGREES);

    // ****** My code starts here
    //slider
    sliderHeight = createSlider(0, 200, 100,);
    sliderHeight.position(10, 10);
    sliderHeight.style('width', '80px');

    sliderSpeed = createSlider(0, 200, 100,);
    sliderSpeed.position(10, 30);
    sliderSpeed.style('width', '80px');

    // add at random locations confetti
    for(var i =0 ; i<200 ; i++){
        confLocs.push(createVector(random(-500,500),random(-800,0),random(-500,500)))
        confTheta.push(random(0,360))
    }
    // ****** My code ends here
}

function draw() {

    background(125);
    
    // ****** My code starts here
    // camera
    var locX = cos(frameCount) * 800;
    var locZ = sin(frameCount) * 800;
    camera( locX, -600,  locZ,0,0,0,0,1,0)

    //confetti
    confetti()

    // materials
    normalMaterial()
    stroke(0);
    strokeWeight(2);
    
    push()

    // lightning
    ambientMaterial(255)
    pointLight(255,0,0,-600,-700,600)

    // boxes
    for(var x = -400 ; x < 400 ; x += 50){
        for(var z = -400 ; z < 400 ; z += 50){
            
            var distance = dist(x,z,0,0)
            var length = map(sin( distance + frameCount * sliderSpeed.value()/100),-1,1,100,300) * sliderHeight.value()/100

            push()
            translate(x,0,z);
            box(50,length,50)
            pop()
        }
    }
    pop()
    // ****** My code ends here
}

// ****** My code starts  here
/**
 * Draws rotating confetti
 */
function confetti(){
    noStroke();

    for(var i = 0 ; i < confLocs.length ; i++){
        // animate
        confLocs[i].y += 1;
        confTheta[i] += 10;

        if(confLocs[i].y > 0) confLocs[i].y = -800;

        push();
        translate(confLocs[i].x,confLocs[i].y,confLocs[i].z)
        rotateX(confTheta[i])
        plane(15)
        pop();
    }
}
// ****** My code ends here
