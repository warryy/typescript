/**
 * 高级类型:
 *    索引类型: keyof T, T 的所有公共属性的字面量的联合类型
 *    索引访问操作符: T[k]
 * 泛型约束: T extends U
 *    即 T 可以赋值给 U
 */

let obj = {
  a: 1,
  b: 2,
};

function getVal(obj: any, keys: string[]) {
  return keys.map((k) => obj[k]);
}

/**
 * 我们希望规避下面这种获取不到值的情况
 */
console.log(obj, ["f"]);

interface Obj {
  a: number;
  b: number;
}
/**
 * 索引类型
 */
let key: keyof Obj;

/**
 * 索引访问操作符
 */
let value: Obj["a"] = 2;

/**
 * 泛型约束: T extends U
 *    即 T 可以赋值给 U
 */
function getVal2<T>(obj: T, keys: (keyof T)[]): T[keyof T][] {
  return keys.map((k) => obj[k]);
}
function getVal3<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((k) => obj[k]);
}

getVal2<Obj>(obj, ["a"]);
// getVal2(obj, ["a", "c"]); // 不能将类型“"c"”分配给类型“keyof Obj”。
// getVal3(obj, ["a", "c"]); // 不能将类型“"c"”分配给类型“keyof Obj”。
