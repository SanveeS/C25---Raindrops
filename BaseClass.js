class BaseClass{
    constructor(){
        var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
        //isStatic : true
    }
    var rand = Math.round(random(0,600));
    this.body = Bodies.rectangle(rand,-10,5,this.height);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    fill(0);
    push();
    rectMode(CENTER);
    fill(255);
    rect(pos.x,pos.y, this.width, this.height);
    pop();
  }
  fall(number){
    this.body.position.y =this.body.position.y + number;
  }
}
    
