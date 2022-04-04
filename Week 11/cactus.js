let cactus;
var cactusX = 100;
var cactusY = 100;
var spikes


function preload() {
  // Load model
  cactus = loadModel('assets/Cactus.obj', true);
  spikes = loadImage('./assets/images.jpeg');
}

function setup() {
  createCanvas(1080, 768, WEBGL);
}

function draw() 
{
push()
  background(200);
  scale(1); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  model(cactus);
pop()
push()
  translate(cactusX, cactusY)
  scale(1); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.06);
  rotateY(frameCount * 0.06);
  normalMaterial();
  texture(spikes)
  model(cactus);
  sphere(40);
pop()
push()
translate(-250, -250)
  scale(1); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  normalMaterial();
  model(cactus);

  translate(cactusX, cactusY)
  scale(1); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.06);
  rotateY(frameCount * 0.06);
  normalMaterial();
  texture(spikes)
  model(cactus);
  sphere(40);
  pop()

  noStroke()
  texture(spikes)
  translate(300,-100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(150);
}