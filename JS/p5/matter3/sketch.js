// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Bodies = Matter.Bodies,
    World = Matter.World,
    Body = Matter.Body;

var engine;
var ground;
var propeller;
var angle = 0;
var angleSpeed=0.1;

var boxes=[];

function setup() {
    createCanvas(900,600)
    engine = Engine.create()
    propeller = Bodies.rectangle(width/2,height/2,300,15,{isStatic : true , angle:angle})

    ground = Bodies.rectangle(500,500,500,10,{isStatic : true, angle: Math.PI * -0.06 })

    // add all of the bodies to the world
    World.add(engine.world, [ground,propeller]);  
}

function draw() {
    background(0)
    Engine.update(engine);

    fill(255)

    if(random(1)<0.2) generateBodies(width/2,0);

    for(var i = 0 ; i < boxes.length; i++)
    {
        drawVertices(boxes[i].vertices)
        if(isOffScreen(boxes[i])){
            World.remove(engine.world,boxes[i])
            boxes.splice(i,1)
            i--;
        }
    }

    drawVertices(propeller.vertices)
    
    Body.setAngle(propeller,angle)
    Body.setAngularVelocity(propeller,angleSpeed)
    angle += angleSpeed

    fill(125)
    drawVertices(ground.vertices)
}

function generateBodies(x,y){
    var b = Bodies.rectangle(x,y,random(10,30),random(10,30),{restitution:0.8,friction:0.001})
    boxes.push(b)
    World.add(engine.world,[b])
}

function isOffScreen(body){
    var pos = body.position;
    return(pos.y>height || pos.x<0 || pos.x>width)
}

function drawVertices(vertices){

    beginShape();
    for (var i = 0 ; i < vertices.length ; i++)
    {
        vertex( vertices[i].x, vertices[i].y );
    }
    endShape(CENTER);
}
