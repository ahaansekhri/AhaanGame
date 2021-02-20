class Spider{
    
    constructor(StartX,StartY, direction, distance, speed){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(StartX, StartY, 20, 20, options);
        this.image = loadImage("spider.png");
        this.direction = direction;
        this.distance = distance; 
        this.speed = speed;
        this.moved = 0;
        this.returning = false;
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);

        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);

        if(this.direction === 0){
            
            if(this.returning === false){
                this.body.position.y += this.speed;
                this.moved += 1;
                if(this.moved > this.distance){
                    this.returning = true;
                }
            }
        

            if(this.returning === true){
                this.body.position.y -= this.speed;
                this.moved -= 1;
                if(this.moved <0){
                    this.returning = false;
                }
            }
        }

            if(this.direction === 1){
                
                if(this.returning === false){
                    this.body.position.x += this.speed;
                    this.moved += 1;
                    if(this.moved > this.distance){
                        this.returning = true;
                    }
                }
    
                if(this.returning === true){
                    this.body.position.x -= this.speed;
                    this.moved -= 1;
                    if(this.moved <0){
                        this.returning = false;
                    }
                }

    
        }

        pop();
    }
}