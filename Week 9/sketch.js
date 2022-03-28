let img;
let img2;
function setup()
{
    createCanvas(710,400, WEBGL);
}

function preload()
{
  img= loadImage("ball.png");
  img2= loadImage("earth.png");
}


function draw()
{
  console.log("hi")
    background(0);

  push();
  translate(240, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  sphere(40);
  
  push();
  translate(400, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img2);
  sphere(40);
}