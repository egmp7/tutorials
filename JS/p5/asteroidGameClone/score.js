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