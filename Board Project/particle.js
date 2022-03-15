const particles = [];

function part() 
{
    for (let i = 0; i < 5; i++) {
      let p = new Particle();
      particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
  
      if (particles[i].finished()) {
        // remove this particle
        particles.splice(i, 1);
      }
    }
}

class Particle
{
    constructor()
    {
        this.x= 300;
        this.y= 300
        this.vx= random(-1,3);
        this.vy= random(-5,1);
        this.alpha= 255;
        //var path= "./Assets/bubble.jpg";
        //this.img= loadImage(path);
    }
    finished()
    {
        return this.alpha< 0;
    }

    update()
    {
        this.x += this,vx;
        this.y += this.vy;
        this.aplpha -= 5;
    }
    show()
    {
        noStroke();
        fill(255, this.alpha);
        //ellipse(this.x, this.y, 16);
        image(this.img, this.x, this.y);
    }
    
}