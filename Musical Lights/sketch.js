function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  frameRate(10);
  for (let xpos = 0; xpos <= width; xpos += 10) {
    for (let ypos = 0; ypos <= random(800); ypos += 10) {
      drawShape(xpos, 400 - ypos, 10, 255, 255, 255);
    }
  }

}

function drawShape(x, y, size, r, g, b) {
  stroke(255, 255, 255)
  strokeWeight(1);
  fill(r, g, b);
  // circle(x, y, size);
  rectMode(CENTER);
  square(x, y, size);
}
