/**
 * 合并
 *      1. 接口
 *      2. 接口中函数重载
 *      3. 命名空间和函数的合并
 *      4. 命名空间和类的合并
 *      5. 命名空间和枚举的合并
 *
 *  为什么命名空间合并时, 必须写在函数和类的后面, 而合并目标为枚举时, 无需关注书写顺序?
 *      自我理解: 类和函数本质上都是函数, 而命名空间本质上是给对象加属性,
 *              如果先声明命名空间, 则对象类型不能再更改为函数类型
 *              而枚举本质上是一个对象, 两者类型都是一样的, 只是先加命名空间的属性, 还是先加枚举属性的顺序问题
 */

/**
 * 1&2. 接口中函数重载的合并后声明顺序如下图后面注释所示
 */
interface A {
  x: number;
  foo(arg: number): number; // 5
  foo(arg: 1): number; // 2
}
interface A {
  y: number;
  foo(arg: string): string; //3
  foo(arg: string[]): string[]; // 4
  foo(arg: 2): number; // 1
}

let a: A = {
  x: 1,
  y: 2,
  foo(arg: any) {
    return arg;
  },
};

/**
 * 3. 命名空间和函数的合并, 命名空间必须写在函数声明后面
 */

function ReactComp() {}
namespace ReactComp {
  export function formatNum(n: number) {
    console.log(n);
  }
}
ReactComp.formatNum(1);

/**
 * 4. 命名空间和类的合并, 命名空间必须写在类声明后面
 * 相当于给类添加静态属性
 */

class C {}
namespace C {
  export let nickName = "类 C";
  export function introduceMe() {
    console.log(`我是${nickName}`);
  }
}

console.log(C.nickName);
C.introduceMe();

/**
 * 5. 枚举与命名空间的合并
 * 相当于给枚举对象加了个方法
 */

enum EColor {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
namespace EColor {
  export function randomColor() {
    const keys = Object.keys(EColor);
    return keys[Math.round(Math.random() * keys.length) - 1];
  }
  export const state = "namespace state";
}

console.log(EColor);
// const color1: EColor = EColor.state; // Type '"namespace state"' is not assignable to type 'EColor'.
const color2: EColor = EColor.Red;

export {};
