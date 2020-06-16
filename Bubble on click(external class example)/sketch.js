let x;
let y;
let r;
let bubbles = [];

function setup() {
  createCanvas(400, 400);
  //background(0);

}

function draw() {
  background(0);
  for(let i = 0; i<bubbles.length; i++){
    bubbles[i].draw();
    bubbles[i].move();
  }
}
//function mouseDragged(){
function mousePressed(){
  let rd = random(10, 25);
  let b = new Bubble(mouseX, mouseY, rd);
  bubbles.push(b);
}

