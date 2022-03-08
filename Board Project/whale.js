var img;
var names= [];
var myImage;
var g= 0;
var imagesToDisplay= [];
var imageClassObject;

var whale;
var result, runResult;
var mine;

function preloadWhale()
{
    swim= loadStrings("./Assets/Whale.txt");
}

function setupWhale()
{
    /*for(var k= 0; k< names.length; k++)
    {
        img= loadImage("./Assets/Whale Sprites/" + names[k]);
        imageClassObject= new imageClass(img, 100,100, 303,300);
        imagesToDisplay[k]= imageClassObject;
    }
    setInterval(SetAnimation, 200);*/
    whale= createSprite(100,250)
    whale.addAnimation('swim','Assets/Whale Sprites/'+ swim[0],'Assets/Whale Sprites/'+ swim[swim.length-1]);

    mine = createSprite(700,800, );
    mine.addImage(loadImage('Assets/mine.png'));
}

function drawWhale()
{
    
    /*image(imagesToDisplay[g].getImage(),
    imagesToDisplay[g].getX(),
    imagesToDisplay[g].getY(),
    imagesToDisplay[g].getW(),
    imagesToDisplay[g].getH());*/

    if(keyDown('d'))
    {
		whale.changeAnimation('swim')
		whale.velocity.x += .5;
        if(whale.collide(mine))
        {
            whale.changeAnimation('swim');
        }
	}
	else if(keyDown('a'))
    {
		//whale.changeAnimation('swim')
		whale.velocity.x -= .5;
	}
    else if(keyDown('s'))
    {

        whale.velocity.y+=.5;
    }else if(keyDown('w'))
    {
        whale.velocity.y-=.5;
    }
    else 
    {
        whale.velocity.x=0
        whale.velocity.y=0
    }
    //whale.debug= mouseIspressed;
    //mine.debug= mouseIspressed;
	drawSprites();
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


