function cloud(x, y, z) {
    this.pos = createVector(x, y, z);
    this.vel = createVector(1, 0,0);
    this.scale = 1 * z;

    this.update = function () {
        this.pos.add(this.vel);
    }

    this.draw = function (){
        //print(this.pos.x);
        ellipse(this.pos.x,this.pos.y,this.pos.z);
    }
}