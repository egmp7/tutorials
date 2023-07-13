// My code here

class Cannon{
    constructor(){

    };

    setupBirdsCannon (){
        for (var i = 0 ; i < 10 ; i++){
            console.log("fire")
            var birdCannon = Bodies.circle(0, height/2, 10, {friction: 0,
                restitution: 0.33 });
            Matter.Body.applyForce(birdCannon, birdCannon.position, Matter.Vector.create(0.07, 0))
            Matter.Body.setMass(birdCannon, birdCannon.mass*5);
            World.add(engine.world, [birdCannon]);
            birdsCannon.push(birdCannon);
        }  
    }
  
    drawBirdsCannon(){
        for(var i = 0; i < birdsCannon.length ; i++){
            fill(255,0,255)
            drawVertices(birdsCannon[i].vertices)
            if(isOffScreen(birdsCannon[i])){
                World.remove(engine.world,birdsCannon[i])
                birdsCannon.splice(i,1)
                i--;
            }
        }
    }
};
// My code ends here