class Snack{
    head: HTMLElement;
    bodies: HTMLCollection; //实时刷新
    element: HTMLElement;

    constructor(){
      this.element = document.getElementById('snack')!;
      this.head = document.querySelector('#snack > div')!;
      this.bodies = document.getElementById('snack')!.getElementsByTagName('div');

    }

    get X(){
      return this.head.offsetLeft;
    }

    get Y(){
      return this.head.offsetTop;
    }

    set X(value:number){
      if(this.X == value){
        return;
      }
      if (value < 0 || value > 290) {
        // 进入判断说明蛇撞墙了
        throw new Error('蛇撞墙了！');
      }
      if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
        if(value>this.X){
          value=this.X - 10;
        }
        else{
          value = this.X + 10;
        }
      }
      this.moveBody()
      this.head.style.left = value+'px';
      this.checkHeaderBody();
    }

    set Y(value:number){
      if(this.Y == value){
        return;
      }
      if (value < 0 || value > 290) {
        // 进入判断说明蛇撞墙了
        throw new Error('蛇撞墙了！');
      }

      if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
        if(value > this.Y){
          value = this.Y - 10;
        }
        else{
          value = this.Y + 10;
        }
      }
      this.moveBody()
      this.head.style.top = value+'px';
      this.checkHeaderBody();
    }

    addBody(){
      this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    moveBody(){
      /*
        *   将后边的身体设置为前边身体的位置
        *       举例子：
        *           第4节 = 第3节的位置
        *           第3节 = 第2节的位置
        *           第2节 = 蛇头的位置
        */
        // 遍历获取所有的身体
      for (let i = this.bodies.length-1; i>0; i--){
        let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
        let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
        
        (this.bodies[i] as HTMLElement).style.left = X + 'px';
        (this.bodies[i] as HTMLElement).style.top = Y + 'px';
      }
    }

    checkHeaderBody(){
      for(let i=1; i<this.bodies.length; i++ ){
        let bd = this.bodies[i] as HTMLElement;
        if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
          throw new Error('撞到自己了！ GameOver')
        }
      }
    }

}

export default Snack;