let cor;
let circuloX //horizontal;
let circuloY //vertical;

function setup() {
  createCanvas(400, 400);
  background("blue")
  
  cor=color (random(0, 255), random(0, 255), random(0, 255));
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}

function draw() {
  fill(cor);
  circle(circuloX[contador], circuloY[contador], 50);
  
  circuloX[contador]+= random(0, 3);
  circuloY[contador]+= random(-3, 3);

  if(mouseIsPressed) {cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100))}
}