var img;
var names= [];
var myImage;
var g= 0;
var imagesToDisplay= [];
var imageClassObject;

function preloadWhale()
{
    names= loadStrings("./Assets/Whale.txt");
}

function setupWhale()
{
    createCanvas(displayWidth, displayHeight);
    for(var k= 0; k< names.length; k++)
    {
        img= loadImage("./Assets/Whale Sprites/" + names[k]);
        imageClassObject= new imageClass(img, 100,100, 253,250);
        imagesToDisplay[k]= imageClassObject;
    }
    setInterval(SetAnimation, 200);
}

function drawWhale()
{
    background(0);
    image(imagesToDisplay[g].getImage(),
    imagesToDisplay[g].getX(),
    imagesToDisplay[g].getY(),
    imagesToDisplay[g].getW(),
    imagesToDisplay[g].getH());
}

function SetAnimation()
{
    g+=1;
    if(g>= imagesToDisplay.length)
    {
        g= 0;
    }
    /*for(var m= 0; m< imagesToDisplay.length; m++)
    {
        imagesToDisplay[m].moveX(10);
    }*/
}  

