var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Body = Matter.Body,
Events = Matter.Events,
Composite = Matter.Composite,
Composites = Matter.Composites,
Common = Matter.Common,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
world = engine.world;

// create renderer
var render = Render.create({
element: document.body,
engine: engine,
options: {
    width: 800,
    height: 600,
    wireframes: false
}
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// Creating edges
var wall1 = Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: bodyStyle }),
    wall2 = Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: bodyStyle }),
    wall3 = Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: bodyStyle }),
    wall4 = Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: bodyStyle });

//stack of circular bodies
var stack = Composites.stack(70, 100, 9, 4, 50, 50, function(x, y) {
    return Bodies.circle(x, y, 15, { restitution: 1, render: bodyStyle });
});

//Adding them to the world
Composite.add(world, [wall1, wall2, wall3, wall4, stack]);

// using collisionStart event on an engine
