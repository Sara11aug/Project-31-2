class Particle {
    constructor(x,y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic: false
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display() {
        fill(this.color);
        var position = this.body.position;
        ellipseMode(RADIUS);
        ellipse(position.x,position.y,this.r,this.r);
    }

}