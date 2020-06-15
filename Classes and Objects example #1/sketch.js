let spots = [];
let r = [];
let g = [];
let b = [];

let oldX;
let oldy;


function setup() {
  createCanvas(400, 400);
  background(0);

  for(let i = 0; i<=6; i++){

    let spot = new Spot();
    spots.push(spot);

    r.push(random(0, 255));
    g.push(random(0, 255));
    b.push(random(0, 255))
  }
}

function draw() {
  //background(0);

  for(let i = 0; i<=6; i++){
    spots[i].show(r[i], g[i], b[i]);
    spots[i].move();
  }
}

class Spot{

  constructor(){
    this.x = 200;
    this.y = 200;
  }

  move(){
    this.oldX = this.x;
    this.oldy = this.y;

    this.x = this.x + random(-10, +10);
    this.y = this.y + random(-10, +10);
  }

  show(tempR, tempG, tempB){
    this.r = tempR;
    this.g = tempG;
    this.b = tempB;
    stroke(this.r, this.g, this.b);
    noFill();
    line(this.oldX, this.oldy, this.x, this.y);
  }

}
