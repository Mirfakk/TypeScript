//object表示一个js对象
let a: object;
a = {};

//主要是用于限制对象内的属性
// let b: { name: string };//这里限制了只有一个name属性，且类型是string
// b = {name:"10"};
// b = {name:"10",age:18};//报错是因为只限制有一个name属性，这里多了一个age属性
//我们可以在定义属性前加上？,表示可选属性
let b: { name: string ,age?:number};//
b = { name: "10", age: 15 };

//若只希望固定一个name属性，其余任意属性可加可不加，则使用[]
//[propName:string]表示任意字符串的属性名
let c: { name: string ,[propName:string]:any};//
b = { name: "10", age: 15 };

//设置函数结构
//表示希望d是一个函数，其中有两个整型类型的参数，返回值为整型类型
let d: (a: number, b: number) => number;
  d = function(a:number,b:number) {
  return a + b;//此处应为整型类型
}

//数组的声明方式
//表明希望e是数组，并且里面存放number
// 1. let e: Array<number>;
// 2.let e: number[];
// e = [1, 2, 3];

 /*
 元组，是固定长度的数组
 */
//表示f数组中智能包含两个字符串类型的数据
let f: [string, string];
f = ['1', '1'];

//enum 枚举
//定义一个叫Gender的枚举类，里面包括了
enum Gender{
  Male = 0,
  Female = 1
}

let g: { name: string, gender: Gender };
g = {
  name: '张三',
  gender: Gender.Male//这里使用了定义好的枚举类里面的数据
}

console.log(g.gender ===  Gender.Male);//这里就能够判断是男性还是女性

//使用  &符号也可以 ，表示且
//该变量类型必须是string同时也是number
let h: {name:string} & {age:number};
h = {
  name: 'zs',
  age:55
};

//类型别名
//创建类型别名，供相同属性的变量使用
type myType = 1 | 2 | 3 | 4;
//那么两个变量的字面量都是myType中的
let k: myType;
let l: myType;