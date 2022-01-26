var x=0;
var y=100;
var sizeX=75;
var sizeY=30;


function setup()
{
    createCanvas(870, 870);
    background(40, 186, 237);
    speedX= random(1,10);
    speedY= random(1,10);
}

function draw()
{
    //background
    fill(58,90,223);
    rect(0,300, 870,500);
    fill(196,157,78);
    rect(0,750, 870,250);
    //name and title
    fill(0,0,0)
    text("Morgan Bowman",770,865)
    text("Feeding Time",10,15)
    //mian fish
    fill(240, 153, 0);
    ellipse(130,500, 100,65);
    ellipse(80,500, 30,75)
    fill(0,0,0)
    circle(168,510, 15);
    circle(153,490, 10);
    fill(255,255,255)
    circle(152,489, 5);
    //other fish
    fill(217, 234, 13);
    ellipse(300,550, 75,30);
    ellipse(x,y, sizeX, sizeY);
    if(x >= 870)
    {
        speedX= random(1,10);
        speedX= -speedX;
    }
    else if(x < 0)
    {
        speedX = random(1,10);
    }
    else if(y >= 870)
    {
        speedY= random(1,10);
        speedY= -speedY;
    }
    else if(x < 0)
    {
        speedY = random(1,10);
    }
    x= x+speedX;
    y= y+speedY;
}