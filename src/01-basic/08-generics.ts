/**
 * 1. 泛型
 * a. 函数声明
 * b. 别名
 * c. 接口
 */

function logFn<T>(args: T) {
  return args;
}

type TLog = <T>(args: T) => T;
let myLog: TLog = logFn;

interface ILog<T = any> {
  (args: T): T;
}
interface ILog2 {
  <T>(args: T): T;
}

let myLog1: ILog = logFn;
let myLog2: ILog2 = logFn;

/**
 * 泛型类, 不可以约束类的静态(static)属性或方法
 */
class Log<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

let log = new Log<string>();
let log1 = new Log();

// log.run(1) // 类型“number”的参数不能赋给类型“string”的参数。
log1.run(1);

/**
 * 泛型约束
 * 好处:
 *    a. 缩写函数重载的联合声明
 *    b. 函数和类可以轻松的支持多种类型
 *    c. 灵活控制类型之间的约束
 * 个人理解
 *    相当于使 ts 中的 '函数' 支持了 '传参'
 */
interface Length {
  length: number;
}
function logFn2<T extends Length>(args: T): T {
  console.log(args.length);
  return args;
}

// logFn2(1); // 类型“number”的参数不能赋给类型“Length”的参数。ts(2345)

export {}