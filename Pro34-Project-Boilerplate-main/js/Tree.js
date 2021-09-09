class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }

        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/tree.png");
        this.overlayImage = loadImage("assets/overlay.png");
    
        World.add(world, this.body);

    }

    show() {
      
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height); 
        //image(this.overlayImage, 0, 0, this.width, this.height); 
        pop();

      }
}