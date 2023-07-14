// My code starts here ------------>

/** Fires the birds Cannon */
class Cannon{
    
    constructor(){
        this.birdsCannon =[];
        this.bullets = 10;
        this.firing = false;

    };

    // Activates the firing mechanism
    fire(){
        this.firing=true
    }

    run(){
        if(this.firing && this.bullets > 0) {
            
            if (frameCount % 5 == 0) {
                // fire 10 bullets
                this.setupBirdsCannon()
                this.bullets -= 1;
            }
        }
        this.draw()
    }

    // Creates the Bodies instances, in this case the bullets 
    setupBirdsCannon (){
        
        var birdCannon = Bodies.circle(0, height/2, 10, {friction: 0,restitution: 0.33 });
        Matter.Body.applyForce(birdCannon, birdCannon.position, Matter.Vector.create(0.07, 0))
        Matter.Body.setMass(birdCannon, birdCannon.mass*3);
        World.add(engine.world, [birdCannon]);
        this.birdsCannon.push(birdCannon);

    }
    // Draws the bullets in this.birdsCannon */
    draw(){
        for(var i = 0; i < this.birdsCannon.length ; i++){
            fill(255,0,255)
            drawVertices(this.birdsCannon[i].vertices)
            if(isOffScreen(this.birdsCannon[i])){
                World.remove(engine.world,this.birdsCannon[i])
                this.birdsCannon.splice(i,1)
                i--;
            }
        }
    }
};
// My code ends here ------------>