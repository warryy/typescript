/**
 * 类型检查机制 & 类型兼容性
 *      类型检查机制
 *          表达式从右向左推断
 *          事件处理会发生从左向右推断
 *      兼容性总结: 
 *          定义: 当 y 可以给 x 赋值时, 我们说 x 兼容 y 类型
 *          结论: 函数参数多的兼容参数少的, 其余的属性少的兼容属性多的
 */

/**
 * 1.
 * 如果没关闭 tsconfig.json -> compilerOptions.strictNullChecks
 * arr会被推断为: (number | null)[]
 * 如果关闭了上述检查
 * arr会被推断为 number[]
 *
 * 这种推断我们称之为从右向左的类型推断, 即根据表达式右侧的值来推断左侧的类型
 */
let arr = [1, null];

/**
 * 从左向右的推断, (上下文推断)
 *      通常发生在事件处理中
 */

window.onkeydown = (event) => {
  // 这里的 event 会被推断成 onkeydown 事件的参数类型: KeyboardEvent
};
window.addEventListener('test', (e) => {
    // 这里的 e 也会被推断出来
})

/**
 * 当 y 可以给 x 赋值是, 我们说 x 兼容 y 类型
 * 接口 X 兼容 Y, 因为 Y 里面有 X 必须的所有属性
 * 即: 属性少的接口兼容属性多的接口
 */
interface X {
  a: string;
}
interface Y {
  a: string;
  b: string;
}

let x: X = { a: "a" };
let y: Y = { a: "a", b: "b" };
x = y; 
// y = x; // 类型 "Y" 中缺少属性 "b"，但类型 "X" 中需要该属性。

/**
 * 类型兼容性: 函数
 */
type Handler = (a: number, b: number) => void;

function hof(h: Handler) {
  return h;
}

/**
 * 类型兼容性: 函数
 * a. 函数参数的个数
 */
let h1 = (a: number) => {};
let h2 = (a: number, b: number, c: number) => {};
hof(h1);
// hof(h2) // error

/**
 * 类型兼容性: 函数
 * a. 函数参数的个数
 * 固定参数, 可选参数, 剩余参数的兼容规则
 *      只有可选参数不可以兼容其余两种
 *      (如果关闭 tsconfig.json -> compilerOptions.strictFunctionTypes, 则可选参数会兼容其余两种情况)
 * 即: 参数多的函数兼容参数少的函数
 */

let a = (x: number, y: number) => {};
let b = (x?: number, y?: number) => {};
let c = (...args: number[]) => {};
a = b;
a = c;
// b = a; // error
// b = c; // error
c = a;
c = b;

/**
 * 类型兼容性: 函数
 * b. 函数参数的类型
 *      和接口正好相反,参数属性多的函数兼容参数属性少的函数
 */
type Point3D {
    x: number
    y: number
    z: number
}
type Point2D {
    x: number
    y: number
}
let f3d = (p: Point3D) => {}
let f2d = (p: Point2D) => {}
// f2d = f3d // error
f3d = f2d

/**
 * 类型兼容性: 函数
 *      返回值属性少的函数兼容返回值属性多的函数
 */
let f1 = (): {x: number, y: number} => ({x: 1, y:2})
let f2 = (): {x: number} => ({x: 1})
// f1 = f2 // error
f2 = f1

/**
 * 类型兼容性: 函数
 *      实现重载的函数要是最宽泛版本, 即入参个数可以少, 但是不能多
 */
function overload(a: number, b: number): number
function overload(a: any):any {}
// function overload(a: any, b: any, c:any):any {} // error

/**
 * 类型兼容性: 枚举
 *      a. number 和 数字枚举互相兼容, 枚举之间互不兼容
 */
enum EFruit {
    Apple,
}
let apple: EFruit.Apple = 3
let num: number = EFruit.Apple

/**
 * 类型兼容: 类  
 *      a. 类只比较结构, 静态成员和构造函数不参与比较 
 *      b. 父类和子类的实例可以完全兼容
 */
class A {
    static sta: 1
    constructor(a: number, b: string){}
    id: number = 1
    // private pri = 2
    // protected pro = 2
}
class B {
    constructor(a: number){}
    id: number = 2
}

let aa = new A(1, '2')
let bb = new B(1)

aa = bb
bb = aa

class C extends A {}
let cc = new C(1, '2')
cc = aa
aa = cc

/**
 * 类型兼容: 泛型接口
 *      只有泛型 T, 被接口成员使用的时候, 才会出现泛型互不兼容
 */
interface EmptyObj<T> {
    // value?: T
}
let obj1: EmptyObj<string> = {}
let obj2: EmptyObj<number> = {}
obj1 = obj2
obj2 = obj1

/**
 * 类型兼容: 泛型函数
 */
let log1 = <T>(x: T): T => {
    return x
}
let log2 = <U>(x: U): U => {
    return x
}
log1 = log2
log2 = log1



export {}