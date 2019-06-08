function flower(x, y) {
    this.pos = createVector(x, y);
    this.radius = height * 0.2;
    this.color = [58, 33, 0];
    this.petal = [];
    this.t=0;
    this.dt=0.01;

    this.setup = function () {
        //push();
        for (var i = 0; i < 50; i++) {

            this.petal[i] = new petal(x,y,i*2*PI/1.618);
        }
        //pop();
        rectMode(CENTER);
    }

    this.draw = function () {
        strokeWeight(3);
        stroke(0);
        fill(0, 137, 6)
        rect(x,(height+y)/2,height*0.025,height-y)
        //stroke(0, 137, 6)
        //trokeWeight(height*0.05);
        //line(x,y,x,height);
        //push();
        //noStroke();
        for (var i = 0; i < 50; i++) {
            this.petal[i].draw(0);
        }
        //this.t+=this.dt
        //print(this.t);
        fill(this.color[0], this.color[1], this.color[2])
        ellipse(this.pos.x, this.pos.y, this.radius);
        //pop();
        
        
    }


}