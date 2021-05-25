class Food{
  element: HTMLElement;

  constructor(){
    //获取页面中的food元素并将其赋值给element
    this.element = document.getElementById('food')!; //报错 因为有可能是null
  }

  get X(){
    return this.element.offsetLeft;
  }

  get Y(){
    return this.element.offsetTop;
  }

  change(){
    let left = Math.round((Math.random()*29)*10)
    let top = Math.round((Math.random()*29)*10)
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food;