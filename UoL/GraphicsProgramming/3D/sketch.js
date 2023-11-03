var buffer;

function setup() {
    createCanvas(900, 600, WEBGL);
    noStroke();
    angleMode(DEGREES);
    buffer =  createGraphics(300,300);
    buffer.background(255);
    
    
}

function draw() {
    background(125);

    //basics();
    //camera();

    
    buffer.fill(255,0,255);
    buffer.noStroke();
    buffer.ellipse(random(buffer.width),random(buffer.height),10,10)


    rotateY(frameCount);
    texture(buffer);
    box(200)
    


}

function camera(){
    var zLoc = height + (sin(frameCount)+1)/2*100;
    camera(0,0,zLoc,0,0,0,0,1,0)

    normalMaterial();
    torus(200,50,50,50);
    translate(0,100,0);
    rotateX(90)
    fill(200)
    plane(500,500)

}

function basics(){

    // MATERIALS
    //normalMaterial();
    //ambientMaterial(255);
    specularMaterial(255)

    // LIGHTS
    //ambientLight(0,255,0);
    // pointLight(0,255,0,0,-200,100)
    // pointLight(255,0,0,mouseX - width/2,mouseY-height/2,100)
    directionalLight(0,0,255,0,1,0)

    // 3D Body
    noStroke()
    sphere(100,20,20)

}
