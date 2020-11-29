const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var chain;



function setup(){
    var canvas = createCanvas(1250,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Hanger(625,100,500,50);

    bird1 = new Bird(100,500);
    bird2 = new Bird(150,500);
    bird3 = new Bird(200,500);
    bird4 = new Bird(250,500);
    bird5 = new Bird(300,500);
    bird6 = new Bird(350,500);

    chain1 = new Chain(bird1.body , box1.body);
    chain2 = new Chain(bird2.body , box1.body);
    chain3 = new Chain(bird3.body , box1.body);
    chain4 = new Chain(bird4.body , box1.body);
    chain5 = new Chain(bird5.body , box1.body);
    chain6 = new Chain(bird6.body , box1.body);
}

function draw(){
    background(220);
    Engine.update(engine);
    box1.display();

    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();
    bird6.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    chain6.display();

}
