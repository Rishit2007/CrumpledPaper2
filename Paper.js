class Paper {
    constructor(x, y, r){
        var options = {
            isStatic : false,
            restituiton : 0.3,
            friction : 0.5,
            density : 0.20,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius =r;
        this.Paper1 = loadImage("sprites/paper.png");
        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle); 
        imageMode(CENTER);
        image(this.Paper1,0, 0,this.radius);
        pop();
      };
};