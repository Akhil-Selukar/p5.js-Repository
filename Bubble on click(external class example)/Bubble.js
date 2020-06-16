class Bubble{

  constructor(x, y, r){
    this.xPos = x;
    this.yPos = y;
    this.radius = r;
  }

  draw(){
    fill(186, 185, 182);
    strokeWeight(1);
    ellipse(this.xPos, this.yPos, this.radius);
  }

  move(){
    this.xPos = this.xPos + random(-5, 5);
    this.yPos = this.yPos + random(-5, 5);
  }
}
