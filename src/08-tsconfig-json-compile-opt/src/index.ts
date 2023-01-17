// import AMDVarA = require('./amd')
console.log("I'm index file");

// // es2019
// console.log([1,2, [3]].flat())

class A {
  constructor() {}
  name: string
}

// 这是一行注释
/** 这是一行注释2 */
class B extends A {}

export = B;

const a = [1, 2, ...[3]];

// noImplicitlyAny: false, 此时函数参数可以不去指定类型
// function fn(arg) {
//     console.log(arg)
// }
