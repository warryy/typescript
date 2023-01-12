import "./";
let a = "asdf";
a; // string

/**
 * narrowing types using 'as const'
 * 通过使用 as const 来进行类型收窄
 */
let b = "asdf" as const;
b; // 'asdf'

/**
 * global lib type
 */
GlobalLib({ globalLib: true });
GlobalLib.doSomething();

/**
 * commonjs module lib
 */
import CommonJSModuleLib from "./commonjs-module-lib";
CommonJSModuleLib({ commonjsLib: true });
CommonJSModuleLib.doSomething();

/**
 * umd module lib
 */
import UMDLib from "./umd-lib";
UMDLib({ umd: true });
UMDLib.doSomething();
/**
 * 全局引用 umd 库
 * script 标签引入 umd 代码, 然后当前文件中直接使用 UMDLib, 会报以下的错
 *      'UMDLib' refers to a UMD global, but the current file is a module. Consider adding an import instead.
 * 此时将 tsconfig.json -> compilerOptions.allowUMDGlobalAccess = true, 则可以成功运行
 */
// UMDLib({umd: true}) // 'UMDLib' refers to a UMD global, but the current file is a module. Consider adding an import instead.

/**
 * 给外部库增加方法
 * 注意声明的 module 名为: 'numeral', 而不是 numeral
 */
import numeral from "numeral";
declare module "numeral" {
  export function myFn(): void;
}

numeral.myFn = () => {};

/**
 * 给全局的库添加属性
 */

declare global {
    namespace GlobalLib {
        function doAnything(): void
    }
}
GlobalLib.doAnything = () => {}

export {};
