"use strict";
//假如制定了一个泛型T，T就表示任意类型
//这里的参数a的类型就是T，只有调用的时候才确定类型
function fn(a) {
    return a;
}
//可以直接调用具有泛型的函数
//不指定泛型，TS可以自动对类型进行推断，但不是所有都可以推断出来
let result = fn(10);
//也可以手动指定类型
let result2 = fn('hello');
//泛型可以同时指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
//建议手动指定泛型
fn2(123, 'hello');
//限制泛型的类型
//表示泛型T必须是Inter的子类
function fn3(a) {
    return a.length;
}
//作用于类也是可以的
class myClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new myClass('百晓生');
