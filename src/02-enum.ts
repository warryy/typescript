// 枚举类型


/**
 * 1. 数字枚举
 * 数字枚举的实现原理: 反向映射
 * Role[Role[Reporter] = 1] = 'Reporter'
 */
enum Role {
  Reporter = 3,
  Developer = 2,
  Admin,
}

// console.log(Role):
// 2: "Developer"
// 3: "Admin"
// Admin: 3
// Developer: 2
// Reporter: 3

/**
 * 2. 字符串枚举, 无反向映射
 */
enum Message {
  Success = "success",
  Fail = "fail",
}

/**
 * 3. 异构枚举, 不建议使用
 */
enum Answer {
  No,
  Yes = "yes",
}
// "use strict";
// var Answer;
// (function (Answer) {
//     Answer[Answer["No"] = 0] = "No";
//     Answer["Yes"] = "yes";
// })(Answer || (Answer = {}));

// 枚举成员的性质, 只读属性
// Role.Admin = 4 // 无法分配到 "Admin" ，因为它是只读属性。

/**
 * 4. 枚举成员的分类
 *      a. 常量
 *      b. 变量: 运行时才计算结果
 */

enum Chart {
  // const
  a,
  b = Chart.a,
  c = 1 + 2,
  // computed
  d = Math.random(),
  e = "123".length,
}
// "use strict";
// var Chart;
// (function (Chart) {
//     Chart[Chart["a"] = 0] = "a";
//     Chart[Chart["b"] = 0] = "b";
//     Chart[Chart["c"] = 3] = "c";
//     Chart[Chart["d"] = Math.random()] = "d";
//     Chart[Chart["e"] = '123'.length] = "e";
// })(Chart || (Chart = {}));

// 5. 常量枚举
enum Month {
  Jan,
  Feb,
  Mar,
}
let months = [Month.Jan, Month.Feb]; // [0, 1]

enum E {
  a,
  b,
}
enum F {
  a = 0,
  b = 1,
}
enum G {
  a = "a",
  b = "b",
}

let e: E = 3
let f: E = 4
console.log(e)
console.log(e === f) // false

let e1 = E.a;
let e2 = E.b;
let e3 = E.a;
// e1 === e2 // 此条件将始终返回 "false"，因为类型 "E.a" 和 "E.b" 没有重叠。ts(2367)
e1 === e3;

export {};
