"use strict";
(function () {
    //
    const obj = {
        name: '张三',
        age: 18
    };
    //定义对象时使用接口
    const obj2 = {
        //里面必须包含定义好的参数
        name: '李思',
        age: 99,
        sayHello() {
        }
    };
    //定义类时，可以使类实现一个接口
    //实现接口就是使类满足接口的要求
    class myClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("hhh");
        }
    }
})();
