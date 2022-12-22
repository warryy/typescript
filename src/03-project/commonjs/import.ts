/**
 * 导入
 *      a. node 默认会找 js 文件, 所以 ts 文件正常模式下无法引入, 需要 ts-node 来兼容 npm i -g ts-node
 *      b.
 */

let commonjs = require("./export");
/**
 * 必须将 compilerOptions.esModuleInterop 置为 false, 才可以使用这个导入方法
 * 否则将建议使用 import fn from '../es6/xxx' 的方式导入
 */
import fn = require("../es6/commonjs-export-in-es6");
import fn2 = require("../es6/export");
console.log("commonjs: ", commonjs);
fn();
fn2.default();
exports.default = {};
