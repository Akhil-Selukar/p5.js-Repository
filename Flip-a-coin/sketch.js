
function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
}
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 20;

function drawBackSlash(){
  x2=x2+20;
  line(x1, y1, x2, y2);
  x1= x1+20; 
    
  if((x2 === width)){
    x1 = 0;
    x2 = 0;
    y1 = y1+20;
    y2 = y2+20;
  }
}

function drawForwardSlash(){
  x1=x1+20;
  line(x1, y1, x2, y2);
  x2= x2+20; 

  if((x1 === width)){
    x1 = 0;
    x2 = 0;
    y1 = y1+20;
    y2 = y2+20;
  }
}

function draw() {
    
  let val = int(random(0, 2));
  stroke(255);
  if(val === 1){
    drawBackSlash();
  }else if(val === 0){
    drawForwardSlash();
  }
}
