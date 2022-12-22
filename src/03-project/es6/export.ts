/**
 * 导出: export
 *      a. 不可以导出变量
 */

/**
 * 导出表达式
 */

export const a = 1;

export function fn() {
    console.log('我是 es6 默认导出的函数')
}

export interface IExportInterface {}

/**
 * 起别名
 */
export { a as aliasA };

/**
 * 默认导出
 */
export default fn;
/**
 * 等价于
 */
// export { fn as default };

/**
 * 导入导出合并
 */
export { b } from "./b";

export * from "./b";
