(function () {
  class Person{
    /*
    属性或方法前可以添加修饰符 
    public，private等等
    */
    private _name: string;
    private _age: number;

    constructor(name:string,age:number) {
      this._name = name;
      this._age = age;
    }
    // getName() {
    //   return this.name;
    // }
    // setName(value:string) {
    //   this.name = value;
    // }
    // getAge() {
    //   return this.age;
    // }
    // setAge(value: number) {
    //   if (value > 0) { 
    //       this.age = value;
    //   }
    // }
    //TS中设置getter方法的方式
    //直接返回了_name属性，要调用直接.即可
    get name() {
      return this._name; 
    }
    set name(value:string) {
      this._name = value;
    }
    get age() {
      return this._age; 
    }
    set age(value:number) {
      this._age = value;
    }
  }
  

  const per = new Person('万物', 18);
  // console.log(per);
  // console.log(per.getName());
  
  // per.setName('罗柳');
  // console.log(per.getName());
  // per.setAge(-55);
  // console.log(per.getAge());
  // console.log(per);
  console.log(per.name);//这里是调用name方法
  per.name = 'hello';
  console.log(per.name);//这里是调用name方法
  per.age = 55;
  console.log(per.age);
  
})();