var x=0;
var y=550;
var y2=500;
var img;
var img2;
//var sizeX=75;
//var sizeY=30;
var whaleX= 0;
var whaleY= 0;
var fishX= 0, fishY= 0;

var speedX= 0;
var speedY= 0;

var fish= [];
var fishXs= [];
var fishYs= [];
var swimSpeedXs= [];
var swimSpeedYs= [];

var fishSize= 10;



function preload() 
{
    //img = loadImage('Assets/ocean.jpg');
    whale = loadImage('Assets/images.jpeg');
    Bfish = loadImage('Assets/fish.jpeg');
}

let bg;
let yb= 0;

function setup()
{
   
    speedX= random(1,10);
    spaadY= random(1,10);

    //image(img, 0, 0); 
    bg= loadImage('Assets/ocean.jpg');
    createCanvas(980, 800);
    background(40, 186, 237);
    speedX= random(1,10);
    speedY= random(1,10);

    var h = window.displayHeight;
    var w = window.displayWidth;

    for(var i = 0; i < fishSize; i++)
    {
        //console.log(i)
        fish[i] = Bfish;
        fishXs[i] = fishX;
        fishYs[i] = fishY;
        fishX = random(0,w);
        fishY  = random(0,h);
        swimSpeedXs[i] = random(-10,10);
        swimSpeedYs[i] = random(-10, 10);    
        
    }
}

function draw()
{
    
    moveWhale();
    //image(img, 0, 0); 
    background(bg);

    //background
    /*fill(58,90,223);
    rect(0,300, 870,500);
    fill(196,157,78);
    rect(0,750, 870,250);*/
    
    image(whale, whaleX,whaleY);
    //image(fish, 50,50);
    image(Bfish, x,y);

    for(var i = 0; i < fish.length; i++)
    {
        //console.log(i)
        image(fish[i], 
            fishXs[i], fishYs[i]);
            fishXs[i] += swimSpeedXs[i];
            fishYs[i] += swimSpeedYs[i];
    }

    //whale(whaleX, whaleY, 20)
    //name and title
    fill(0,0,0);
    textFont('cursive');
    textSize('40');
    text("Morgan Bowman",880,795);
    text("Feeding Time",10,15);
    //mian fish
    fill(240, 153, 0);
    ellipse(130,500, 100,65);
    ellipse(80,500, 30,75)
    fill(0,0,0);
    circle(168,510, 15);
    circle(153,490, 10);
    fill(255,255,255);
    circle(152,489, 5);
    //other fish
    fill(217, 234, 13);
    ellipse(x,y2, 75,30);
    //image(Bfish, 50,50);

    if(x >= 870)
    {
        speedX= random(1,10);
        speedX= -speedX;
    }
    else if(x < 0)
    {
        speedX = random(1,10);
    }
     x= x+speedX;
     fill(234, 13, 137);
     ellipse(x,y, 75,30);
     if(x >= 870)
    {
        speedX= random(1,10);
        speedX= -speedX;
    }
    else if(x < 0)
    {
        speedX = random(1,10);
        x= x+speedX;
    }    
}

function moveWhale()
{
    
    if(keyIsPressed)
    {console.log("a");
        if(key== 'a')
        {
            whaleX-=5;
        }

        else if(key== 'd')
        {
            whaleX+=5;
        }
        else if(key== 's')
        {
            whaleY+=5;
        }else if(key== 'w')
        {
            whaleY-=5;
        }
    }
}