class Person{
  //readoly，表示只读，无法修改。
 readonly name: string = '张三';
  //在属性前使用static关键字可以定义类属性（静态属性）
  //静态属性：不需要创建对象就可以用的属性，能够直接通过类名来调用
  static age: number = 18;

  //定义行为：方法
  sayHello() {
    console.log("hi");
  }
}
const per = new Person();

console.log(per);
//静态属性要通过类名去访问
console.log(Person.age);
// per.name = '李四';
Person.age = 55;//静态属性只能通过类名来修改
console.log(per.name);
per.sayHello();