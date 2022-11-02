class Dog{
  name: string;
  age: number;
  //构造函数
  constructor(name:string,age:number) {
    //在实例方法中，this就表示当前的对象
    //可以通过this向新建对象中添加属性
    this.name = name;
    this.age = age;
    
  }

  bark() {
    // console.log('hhh');
    console.log(this);
    
  }
}

const dog = new Dog('张三',18);
const dog2 = new Dog('李四',18);
console.log(dog);
dog2.bark();
