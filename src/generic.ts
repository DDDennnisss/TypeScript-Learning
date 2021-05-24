function fn<T> (a:T): T {
  return a;
}

//可以直接调用具有泛型的函数
let result = fn(10); //不指定泛型， TS可以自动对类型进行判断
let result2 = fn<String>('hello');

function fn2<T,K>(a:T, b:K):T{
  console.log(b);
  return a;
}

fn2<number,string>(123, 'hello');

interface Inter{
  length: number;
}

// T extends Inter 表示泛型T必须是Inter实现类(子类)
function fn3<T extends Inter>(a:T):number{
  return a.length;
}

class MyClass<T>{
  constructor(name:T){

  }
}

const mc = new MyClass<String>("Dennis");