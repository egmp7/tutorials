// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Bodies = Matter.Bodies,
    World = Matter.World;

var engine;
var box1;
var circle, polygon;
var ground1 , ground2;

var boxes=[];

function setup() {
    createCanvas(900,600)
    engine = Engine.create()

    // bodies
    box1 = Bodies.rectangle(200,200,80,80,{restitution:0.8,friction:0.001})
    // circle = Bodies.circle(80,0,20,{restitution:0.8,friction:0.001});
    // polygon = Bodies.polygon(100,0,5,30,{restitution:0.8,friction:0.001});
    ground1 = Bodies.rectangle(100,200,500,10,{isStatic : true, angle: Math.PI * 0.06 })
    ground2 = Bodies.rectangle(500,500,500,10,{isStatic : true, angle: Math.PI * -0.06 })

    // add all of the bodies to the world
    World.add(engine.world, [box1,ground1,ground2]);  
}

function draw() {
    background(0)
    Engine.update(engine);

    fill(255)
    drawVertices(box1.vertices);
    // drawVertices(circle.vertices);
    // drawVertices(polygon.vertices)

    generateBodies(width/2,0);

    for(var i = 0 ; i < boxes.length; i++)
    {
        drawVertices(boxes[i].vertices)
        if(isOffScreen(boxes[i])){
            World.remove(engine.world,boxes[i])
            boxes.splice(i,1)
            i--;
        }
    }

    fill(125)
    drawVertices(ground1.vertices)
    drawVertices(ground2.vertices)
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
