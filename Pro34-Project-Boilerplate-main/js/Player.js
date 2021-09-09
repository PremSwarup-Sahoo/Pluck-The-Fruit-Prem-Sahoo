class Player {
    constructor(x, y, Pwidth, Pheight,Hwidth,Hheight, angle) {
      const options = {
        isStatic: true
      };

      this.angle= angle
  
      this.playerBody = Matter.Bodies.rectangle(x, y, width, height, options);
      this.playerWidth = Pwidth;
      this.playerHeight = Pheight;
      this.playerImage = loadImage("assets/player.png");

      this.handBody = Matter.Bodies.rectangle(x+30, y-50, width, height, options);
      this.x = x+30
      this.y = y-50
      this.handWidth = Hwidth;
      this.handHeight = Hheight;
      this.handImage = loadImage("assets/hand1.png");

      this.support = Matter.Bodies.rectangle(x+30, y-50, width, height, options);
  
      World.add(world, this.playerBody);
      World.add(world, this.handBody);
      World.add(world, this.support);
  
      Matter.Body.setAngle(this.handBody, PI / 2); 
    }
  
    show() {

      if (keyIsDown(DOWN_ARROW) && this.angle > 1.5) {
        this.angle -= 0.01;
        Matter.Body.setAngle(this.handBody, this.angle);
      }
  
      if (keyIsDown(UP_ARROW) && this.angle < 3.15) {
        this.angle += 0.01;
        Matter.Body.setAngle(this.handBody, this.angle);
      }
      
      var handPos = this.handBody.position;
      
      push();
      translate(handPos.x, handPos.y);
      rotate(this.angle);
      imageMode(BOTTOM);
      image(this.handImage, 0, 0, this.handWidth, this.handHeight);
      pop();

      var playerPos = this.playerBody.position;
      var playerAngle = this.playerBody.angle;
      
      push();
      translate(playerPos.x, playerPos.y);
      rotate(playerAngle);
      imageMode(CENTER);
      image(this.playerImage, 0, 0, this.playerWidth, this.playerHeight); 
      pop();

    }

    getHandPos(){

    }

  }