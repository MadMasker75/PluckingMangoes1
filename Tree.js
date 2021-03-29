class Tree{
    constructor(x,y,width,height){
      var options = {
        isStatic : true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     var tree = loadImage("tree.png");
     this.image = tree;
     this.width = 450;
     this.height = 580;
     World.add(world, this.body);
    }
    /*constructor(x,y){
      super(x,y,450,580);
      this.image = loadImage("tree.png");
    }*/
    display() {
      var pos = this.body.position;
      rectMode(CENTER);
      //fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
      }
      /*display() {
        super.display();
      }*/
}