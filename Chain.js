class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 25
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.chain);
    }

    display(){ 
        if(this.chain.bodyA){
        var bodyA = this.chain.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }
    
    flyfunction(){
        this.chain.bodyA = null;
        
    }
}