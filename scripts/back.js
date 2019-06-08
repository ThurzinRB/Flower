function back (){
    this.cloud = []

    this.setup=function(){
        cloud[1]=new cloud(200,200,20);
    }
    
    this.draw=function(){
        cloud[1].update();
        cloud[1].draw();
    }
}