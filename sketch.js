const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var raindrops = [];
function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    raindrops.push(new biggerraindrops());  
    raindrops.push(new smallerraindrops());
}
 
function draw(){
  Engine.update(engine);
  background(255);
    for (var i = 0; i < raindrops.length; i++) {
        raindrops[i].display();
        raindrops[i].fall(1);
        console.log(raindrops[i].body.position.x);
    }
    
}