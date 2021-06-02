class Rope{
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 300
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);

    }
    
    
    display (){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        strokeWeight (5);
        line(pointB.x,pointB.y,pointA.x,pointA.y);

        }
    }
}