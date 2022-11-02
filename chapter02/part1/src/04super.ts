//将代码写在立即执行函数中，以避免不同文件重复的变量名产生冲突

(function () {
  //super就是超类，
  class Animal{
    name: string;
    age: number;
    //构造函数
    constructor( name: string,age: number) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      console.log('hi');
    }
  }
  //子类继承父类，会拥有父类所有方法和属性
  class Dog extends Animal{
    //拓展了Animal类
    run() {
      //拼接字符串
      console.log(`${this.name}在跑`);
    }
    //父类有的方法，子类也可以有
    sayHello() {
      //如果是super开头调用sayHello，那么会调用父类的方法
      // super.sayHello();
      console.log('狗叫');
      
    }
    //构造函数
    constructor(name: string, age: number) {
      //如果子类也有构造函数，必须在构造函数中调用父类构造函数
      super(name,age);//调用父类构造函数
      this.name = name;
      this.age = age;
    }
  }

  const dog1 = new Dog('小黑',3);
  console.log(dog1);
  dog1.run();
  dog1.sayHello();
})();

