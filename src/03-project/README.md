1. tsc 命令默认编译出来的产物是 es3
2. `tsc ./src/03-project/es6 -t es3` or `tsc ./src/03-project/es6 -t es5`, 则编译出来的 js 产物为 module: commonjs 文件, `tsc ./src/03-project/es6 -t es6` 则编译出来的 js 产物为 module: es6 文件
3.  `a = {foo: () => {}}; (0, a.foo)()`, 其中包含了: 逗号运算符(运算符对它的每个操作数从左到右求值，并返回最后一个操作数的值). 所以第二个表达式句话实际相当于 `0, var temp = a.foo; temp()`
4.  顶级导出: 
- es6: export default
- commonjs: module.exports
  - module.exports 会覆盖 exports.xxx

5. 如果 a.ts 导出使用 es6 方法导出: `export default function fn(){}`, b.ts 使用 非 es6 方法导入 a: `const fn = require('a.js')`, 则 b.ts 中需要这样使用fn: `fn.default()`, ts 对此种情况进行了兼容, 需要将 a.ts 文件的默认导出改为 `module = function fn(){}`, 且 a.ts 文件不可以再有其他导出属性, 这时候 b.ts 使用 `const fn = require('a.js')` 方法导入模块时, 就可以直接调用函数了: `fn()`