function setup() {
  createCanvas(780, 600);
}

function draw() {
  background(200);
  
  push();
  translate(width*0.2, height*0.5);
  polygon(0, 0, 70, 3); 
  pop();
  
  push();
  translate(width*0.5, height*0.5);
  polygon(0, 0, 70, 20); 
  pop();
  
  push();
  translate(width*0.8, height*0.5);
  polygon(0, 0, 70, 7); 
  pop();
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}