// My code starts here ---------------->

/** Stores and draws the score,
 * Also draws current time in seconds
 */

class Score{
    constructor(){
        this.points = 0
    }
    draw(){
        text(`Score: ${this.points}`,50,50)
        text(`Time: ${int(frameCount/60)}s`,50,70)
    }
    add(){
        this.points += 1;
    }
}

// My code ends here ---------------->