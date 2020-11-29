class Chain{
    constructor(bodya , bodyb){
        var options = {
            bodyA : bodya,
            bodyB : bodyb,
            length : 400,
            stiffness : 0.1
        }
        this.chain = Constraint.create(options);
        World.add(world , this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        line(pointA.x , pointA.y , pointB.x , pointB.y);
    }
}