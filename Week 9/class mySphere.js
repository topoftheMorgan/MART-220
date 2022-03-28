class mySphere
{
    constructor(radius, detailX, detailY, locationX, locationY)
    {
        this.radius = radius;
        this.detailX = detailX;
        this.detailY = detailY;
        this.locationX = locationX;
        this.locationY = locationY;
    }
    show()
    {
        sphere(this.radius, this.detailX, this.detailY);
    }
    translateSphere()
    {
        translate(this.locationX, this.locationY);
    }
    rotateShpere(amount)
    {
        rotateX(amount);
        rotateY(amount);
    }
}