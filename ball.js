class Ball{
    constructor(x,y,radius){
        var options = {
            density: 1.0,
            frictionAir : 0.01
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("grey");
        ellipse(0,0,this.radius);
        pop();
    }
}