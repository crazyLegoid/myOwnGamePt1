class Player{

    constructor(x, y, radius){

        this.x = x;
        this.y = y;
        this.r = radius;
        this.grav = 0.6;
        this.velY = 0;
        this.upForce = -10;
        this.image = loadImage("images/knight.png");

    }

    display(){

        fill(255);
        ellipse(this.x, this.y, 16, 16);
        imageMode(CENTER);
        image(this.image, this.x + 10, this.y - 10, 50, 60);

    }

    update(){

        this.velY +=this.grav;
        this.y += this.velY;

        if(this.y > 365){

            this.y = 365;
            this.velY = 0;
            jumpCase = 0;

        }

    }

    up(){

        this.velY += this.upForce;

    }

    move(){

        if(keyIsDown(65)){

            this.x -= 5;

        }

        if(keyIsDown(68)){

            this.x += 7;

        }

    }

    check(){

        if(this.x > 800){

            stage++;
            this.x = 20;

        }

    }

}