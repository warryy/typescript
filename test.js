define("data-type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('data type file');
    /**
     * 原始类型
     * boolean, string, number, bigint
     * null, undefined, symbol
     */
    var bool = true;
    var num = 1;
    var str = "string";
    var smb1 = Symbol();
    // 数组
    var arr1 = [1, 2];
    var arr2 = [1, 2, 3];
    // 元组
    var tuple = [1, "abc"];
    // 元组越界问题
    // tuple.push(3);
    // console.log(tuple[2]); // TS2493: Tuple type '[number, string]' of length '2' has no element at index '2'.
    // 函数
    var add = function (x, y) { return x + y; };
    var compute;
    compute = function (x, y) { return x + y; };
    // 对象类型
    // let obj: object = { x: 1 };
    // obj.x = 3 // 类型“object”上不存在属性“x”。ts(2339)
    var obj = { x: 1 };
    obj.x = 2;
    var obj2 = { x: 1 };
    obj2.x = 3;
    /**
     * undefined null
     * 是任何类型的子类型, 说明它俩可以被赋值给其他类型
     * 有时报错, 需要修改 tsconfig.json -> compilerOptions.strictNullChecks: false
     */
    var un;
    var nu;
    un = null;
    nu = undefined;
    obj = null;
});
define("index", ["require", "exports", "data-type"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.querySelector(".app").innerHTML = "hello typescript";
});
