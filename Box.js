class Box {
    constructor(x,y,w,h){
        var options = {
        isStatic:true
        }
    
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w;
    this.height = h;
    this.boxImage = loadImage("sprites/dustbingreen.png");
    World.add(world, this.body);
}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle); 
    imageMode(CENTER);
    image(this.boxImage, 0, -50, this.width, this.height*7);
    pop();
}
}