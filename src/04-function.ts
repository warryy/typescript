/**
 * 函数
 * 1. 直接定义
 * 2. 变量方法定义
 * 3. 接口定义
 * 4. 类型别名定义
 */
function addFn(x: number, y: number) {
  return x + y;
}
let add: (x: number, y: number) => number;

interface Add {
  (x: number, y: number): number;
}

type TAdd = (x: number, y: number) => number;

/**
 * 混合接口
 */
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

// 这个是个单例
let lib: Lib = (() => {}) as Lib;
lib.version = "0.0.0";
lib.doSomething = () => {};

// 想创建多个lib, 需要封装函数
function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "0.0.0";
  lib.doSomething = () => {};
  return lib;
}

export {};
