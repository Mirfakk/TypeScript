"use strict";
//将代码写在立即执行函数中，以避免不同文件重复的变量名产生冲突
(function () {
    //abstract开头的类是抽象类，和其他类区别不大。
    //抽象不能创建对象，是用来被继承的类。
    //抽象类中可以添加抽象方法
    class Animal {
        //构造函数
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    //子类继承父类，会拥有父类所有方法和属性
    class Dog extends Animal {
        //父类有的方法，子类也可以有
        sayHello() {
            //如果是super开头调用sayHello，那么会调用父类的方法
            // super.sayHello();
            console.log('狗叫');
        }
    }
    class Cat extends Animal {
        //必须重写抽象方法，否则会报错
        sayHello() {
            console.log('猫叫');
        }
    }
    const dog1 = new Dog('小黑', 3);
    console.log(dog1);
    dog1.sayHello();
    const cat1 = new Cat('小白', 5);
    cat1.sayHello();
})();
