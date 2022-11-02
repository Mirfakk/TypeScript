//将代码写在立即执行函数中，以避免不同文件重复的变量名产生冲突

(function () {

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
      console.log('狗hi');
    }
  }
  class Cat extends Animal{
     //父类有的方法，子类也可以有
    //就近原则
    sayHello() {
      console.log('猫hi');
    }
  }

  const dog1 = new Dog('小黑',3);
  const cat1 = new Cat('小白',3);
  console.log(dog1);
  dog1.run();
  dog1.sayHello();
  console.log(cat1);
  cat1.sayHello();
})();

