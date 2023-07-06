class Game{
    constructor(){
        this.time = 60;
    }

    run(){
        this.calculateTime();
        this.draw();
    }
    calculateTime(){
        if(frameCount%60 == 0) this.time -= 1
    }
    draw(){
        console.log(boxes.length)
        // remaining time
        if (this.time > 0) this.drawStatus()  
        else this.gameOver() 
        if (boxes.length == 0) this.win()
    }
    drawStatus(){
        textSize(20);
        fill(255)
        var rightPadding = 200;
        var topPadding = 50;
        text(`Remaining time: ${this.time}`,width - rightPadding ,topPadding)
        text(`Boxes: ${boxes.length}`,width - rightPadding,topPadding+25)
    }

    win(){
        noLoop()
        textSize(40);
        textAlign(CENTER);
        text("YOU WIN",width/2,height/2)
    }

    gameOver(){
        noLoop()
        textSize(40);
        textAlign(CENTER);
        text("GAME OVER",width/2,90)
    }
};