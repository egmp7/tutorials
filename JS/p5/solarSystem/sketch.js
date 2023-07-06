var speed;

function setup() {
    createCanvas(900, 700);
}

function draw() {
    background(0);
    speed = frameCount;

    /**SUN */
    push();
    translate(width/2, height/2);
    scale(0.6)
    push()
    rotate(radians(speed/3))
    celestialObj(color(255,150,0), 200); 
    pop()

        /**EARTH */
        push()
        rotate(radians(speed))
        translate(300,0)
        push()
        rotate(radians(speed))
        celestialObj(color(0,0,250), 80); 
        pop()

            /**MOON */
            push()
            rotate(radians(-speed *2))
            translate(100,0)
            celestialObj(color(255), 30);
            
                /**ASTEROID */
                push()
                rotate(radians(speed *3))
                translate(35,0)
                celestialObj(color(255,255,0), 15);
                pop()
            pop()

            /** SECOND MOON */
            push()
            rotate(radians(-speed *2.5))
            translate(130,70)
            celestialObj(color(255,0,255), 30);
            pop()
        pop()

        /**MARS */
        rotate(radians(speed*0.7))
        translate(550,0)
        rotate(radians(-speed*1.8))
        celestialObj(color(255,0,100), 100); 
    pop();
}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}
