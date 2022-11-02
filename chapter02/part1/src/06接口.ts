(function () {
  
  //描述一个对象的类型
  type myType = {
    name: string,
    age: number
  }

  //
  const obj: myType = {
    name: '张三',
    age: 18
  }
  /*
  接口用来定义一个类结构，用来定义类中应该包含哪些属性和方法
    同时接口也可以当成类型声明
    如果重复定义同名接口，那么接口中的类型会汇总，例如1+2=3，那么定义对象使用的接口就要包含3个属性。
    接口中的所有属性都不能有实际值。
    接口值定义对象的结构，而不考虑实际值。
      接口中所有方法都是抽象方法
  */
  interface myInterface{
    name:string,
    age: number,
    sayHello(): void;
  }
  //定义对象时使用接口
  const obj2: myInterface={
    //里面必须包含定义好的参数
    name: '李思',
    age: 99,
    sayHello() {
      
    }
  }

    //定义类时，可以使类实现一个接口
    //实现接口就是使类满足接口的要求
  class myClass implements myInterface{
    constructor(name:string,age:number) {
      this.name = name;
      this.age = age;
    }
    sayHello(): void {
      console.log("hhh");
    }
    //接口
    name: string;
    age: number;
      
    }
  }
) ();