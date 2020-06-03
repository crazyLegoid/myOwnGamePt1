class Pillar{

    constructor(x, y, width, height){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

    display(){

        rectMode(CORNER);
        fill("brown");
        rect(this.x, this.y, this.width, this.height);

    }

    isTouching(body){

        if(body.x - this.x < body.r + this.width/2 && this.x - body.x > body.r + this.width/2 && body.y - this.y < body.r + this.height/2 && this.y - body.y < body.r + this.height/2){

            body.x = this.x + 10;

        }

    }

}