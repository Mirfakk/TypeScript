//使用字面量,限制变量，类似于const
let a: 10;//指定a只能是10
// a = 11;
//可以使用 | 来链接类型(联合类型)，可以限制变量为指定范围的类型
let b: 'male' | 'female';//指定a只能是10
b = 'male';
b = 'female';

let c: boolean | string | number;
c = false;
c = 'hello';
c = 1555;

//any  为任意类型,变量设置为any相当于对其关闭了ts类型检测。
//不声明变量类型就是隐式any，ts会自动判断为any
let d: any;//声明为显示any
d = 15;
d = '15';
d = false;

//unknown 表示未知类型
let e: unknown;
e: true;

let s: string;
// s = d;//d的类型为any，能够赋值给任意变量。
//赋值看的是变量类型，而不是变量的值的类型

//unknown实际上是一个类型安全的any
//unknown类型的变量，不能直接赋值给其他变量
//若需要赋值，有两种方法
// 1.可以先执行判断
// 因为s是string类型变量
if (typeof e === 'string') {
  s = e;

}
//2.类型断言，可以用来告诉编译器变量的实际类型
// 类型断言的两种用法
s = e as string;//开发者下定结论，让编译器忽略
// S = <string>e;//第二种用法
function fn(num){
  if (num > 0) {
    return true;
  } else {
    return 123;
  }
}

// void表示为空，就是没有返回值。
function fn1():void {
  
}
// never表示永远不会返回结果,作用是用来报错。
function fn2():never {
  throw new Error('报错了');
}