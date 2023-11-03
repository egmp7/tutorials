// My code starts here ------------>

/** Calculates the time left, 
 * if the game runs out of time, the game finish */
class Game{
    
    constructor(){
        this.time = 60;
    }

    run(){
        this.calculateTime();
        this.draw();
    }

    // get remaining time
    calculateTime(){
        if(frameCount%60 == 0) this.time -= 1
    }
    draw(){
        // remaining time
        if (this.time > 0) this.drawStatus()  
        else this.gameOver() 
        // number of boxes
        if (boxes.length == 0) this.win()
    }

    // draw Current Status
    drawStatus(){
        textSize(20);
        fill(255)
        var rightPadding = 200;
        var topPadding = 50;
        text(`Remaining time: ${this.time}`,width - rightPadding ,topPadding)
        text(`Boxes: ${boxes.length}`,width - rightPadding,topPadding+25)
    }

    // draws Win
    win(){
        noLoop()
        textSize(40);
        textAlign(CENTER);
        fill(255)
        text("YOU WIN",width/2,height/2)
    }

    // draws Game Over
    gameOver(){
        noLoop()
        textSize(40);
        textAlign(CENTER);
        fill(255)
        text("GAME OVER",width/2,height/2)
    }
};
// My code ends here ------------>