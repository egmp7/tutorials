// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Bodies = Matter.Bodies,
    World = Matter.World,
    Constrain = Matter.Constraint

var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;

var engine
var ground
var constrain1, constrain2, constrain3
var poly1A, poly1B , poly2, poly3
var canvas

function setup() {
    canvas = createCanvas(900,600)
    engine = Engine.create()

    poly1A = Bodies.polygon(700,100,6,20);
    poly1B = Bodies.polygon(700,250,1,50);
    
    constrain1 = Constrain.create({
        bodyA: poly1A,
        pointA:{x:0,y:0},
        bodyB: poly1B,
        pointB:{x:-10,y:-10},
        stiffness:0.01
    });

    poly2 = Bodies.polygon(400,100,4,30);

    constrain2 = Constrain.create({
        pointA: { x: 150, y: 50 },
        bodyB: poly2,
        pointB: { x: -10, y: -20 }
    });

    poly3 = Bodies.polygon(300,200,5,40);

    constrain3 = Constrain.create({
        pointA:{x:400,y:120},
        bodyB: poly3,
        pointB:{x:0,y:-0},
        stiffness:0.001,
        damping:0.5
    });

    ground = Bodies.rectangle(width/2,height-80,900,10,{isStatic : true})
    
    // add all of the bodies to the world
    World.add(engine.world, [ground,poly1A,poly1B,constrain1,poly2,constrain2,poly3,constrain3]);  

    // setup mouse
    var mouse = Mouse.create(canvas.elt);
    var mouseParams = {
        mouse: mouse,
        constraint: { stiffness: 0.05 }
    }
    mouseConstraint = MouseConstraint.create(engine, mouseParams);
    mouseConstraint.mouse.pixelRatio = pixelDensity();
    World.add(engine.world, mouseConstraint);

    // // Mouse
    // var mouse = Mouse.create(canvas.elt);
    // var mouseParams = {
    //     mouse: mouse
    // }
    // var mouseConstraint = MouseConstraint.create(engine,mouseParams);

    // World.add(engine.world, mouseConstraint);  
}

function draw() {
    background(0)
    Engine.update(engine);

    noStroke()

    fill(155)
    drawVertices(ground.vertices);

    fill(255);
    drawVertices(poly1A.vertices);
    drawVertices(poly1B.vertices);
    drawVertices(poly2.vertices);
    drawVertices(poly3.vertices);

    stroke(200)
    strokeWeight(3)
    drawConstraint(constrain1);
    drawConstraint(constrain2);
    drawConstraint(constrain3);
    
    


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

function drawConstraint(constraint) {
    var offsetA = constraint.pointA;
    var posA = {x:0, y:0};
    if (constraint.bodyA) {
        posA = constraint.bodyA.position;
    }
    var offsetB = constraint.pointB;
    var posB = {x:0, y:0};
    if (constraint.bodyB) {
        posB = constraint.bodyB.position;
    }
    line(
    posA.x + offsetA.x,
    posA.y + offsetA.y,
    posB.x + offsetB.x,
    posB.y + offsetB.y
    );
}
