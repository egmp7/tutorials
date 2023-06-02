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
        text(this.time,width/2,90)
        text(`Boxes ${boxes.length}`,width/2,140)
    }

    win(){
        noLoop()
        text("YOU WIN",width/2,90)
    }

    gameOver(){
        noLoop()
        text("GAME OVER",width/2,90)
    }
};