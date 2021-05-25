# Typescript

self-learning typescript Notes

1. abstract class: 抽象类： 专门用来继承的，可以添加抽象方法，不能创建对象。
   abstract method():void; 抽象方法： 没有方法体，只能定义在抽象类中，子类必须对抽象方法进行重写。

2. interface :接口可以在定义类的时候区限制类的结构，用来定义一个类中包含哪些属性和方法，同时接口也可以当成类型声明去使用。
   就是对类的限制和规范

type myType = { //类型声明，不能重复声明
name: string;
age: number;
}

interface myInterface{ //接口声明，能重复声明， 如果重复声明，创建对象需要定义所有接口的属性和方法
name: string;
age: number;
}

3. 属性的封装: public //message.ts 里
   private: 只能在类里访问
   protect: 只能在当前类和当前类的子类中使用
   ...

4. 泛型： 定义函数或者类时， 如果遇到类型不明确就可以使用泛型 //generic.ts 里
