
var origin = {
  x : 50,
  y : 50
};

var col = {
  r : 0,
  g : 0,
  b: 0
};

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  origin.x = random(0, 400);
  origin.y = random(0, 400);

  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);

  fill(col.r, col.g, col.b, 100);
  noStroke();

  ellipse(origin.x, origin.y, 25, 25);

  var count = frameCount;

  if (count%500 === 0){
    background(col.r, col.g, col.b);
  }
}
