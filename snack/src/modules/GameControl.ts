import Snack from './Snack';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl{
    snack : Snack;
    food : Food;
    scorePanel : ScorePanel;
    direction: String ='';
    isLive : boolean = true;

    constructor(){
      this.snack = new Snack();
      this.food = new Food();
      this.scorePanel = new ScorePanel(10, 1);
      this.init();
    }

    init(){
      document.addEventListener('keydown', this.keydownHandler.bind(this));
      this.run();
    }

    keydownHandler(event:KeyboardEvent){
      this.direction = event.key;
    }

    run(){

      let X = this.snack.X;
      let Y = this.snack.Y;

      /* 
         Chrome       IE 
         ArrowUp      Up 
         ArrowDown    Down 
         ArrowLeft    Left 
         ArrowRight   Right 
     */ 

      switch (this.direction){
        case "ArrowUp":
        case "Up":
            Y-=10;
            break;
        case "ArrowDown":
        case "Down":
            Y+=10;
            break;
        case "ArrowLeft":
        case "Left":
            X-=10;
            break;
        case "ArrowRight":
        case "Right":
            X+=10;
            break;
      }

      this.checkEat(X,Y);

      try{
        this.snack.X = X;
        this.snack.Y = Y;
      }catch(e){
        alert(e.message+"Game Over!");
        this.isLive = false;
      }

      this.isLive && setTimeout(this.run.bind(this), 300-(this.scorePanel.level-1)*30);
    }

    checkEat(X:number, Y:number){
      if(X === this.food.X && Y === this.food.Y){
        this.food.change();
        this.scorePanel.addScore();
        this.snack.addBody();
      }
    }
}

export default GameControl;