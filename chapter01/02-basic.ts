
//声明一个变量a,指定它的类型为number
//let a: number;

let a:number;
a = 10;
a = 18;
// a = 'hello';//由于指定了a的类型，所以给a赋字符串会报错。

let b: string;
b = 'Hello Ts';

//如果变量的声明和赋值是同时进行，ts会自动对变量进行类型检测
let c = true;

//JS中函数是不考虑参数的类型和个数的
//在参数或者函数后面添加类型依次来约束
function sum(a:number, b:number):number {
  return a + b;
}
let result = sum(123, 456);
