(function(){
  class Person {
    // private _name: string;
    // private _age: number;

    // constructor(_name:string, _age:number){
    //   this._name = _name;
    //   this._age = _age;
    // }

    //等同于上面
    constructor(private _name:string , private _age:number){

    }

    get name(){
      return this._name
    }

    get age(){
      return this._age;
    }

    set name(value:string){
      this._name = value;
    }

    set age(value: number){
      if(value>=0){
        this._age = value;
      }
    }
  }

  const per = new Person("Dennis",20)
  per.name;
  per.age = 33;
  console.log(per);
  
})();