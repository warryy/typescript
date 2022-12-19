console.log("data type file");
/**
 * 原始类型
 * boolean, string, number, bigint
 * null, undefined, symbol
 */
let bool: boolean = true;
let num: number = 1;
let str: string = "string";
let smb1: symbol = Symbol();

// 数组
let arr1: number[] = [1, 2];
let arr2: Array<number> = [1, 2, 3];

// 元组
let tuple: [number, string] = [1, "abc"];
// 元组越界问题
// tuple.push(3);
// console.log(tuple[2]); // TS2493: Tuple type '[number, string]' of length '2' has no element at index '2'.

// 函数
let add = (x: number, y: number) => x + y;
let compute: (x: number, y: number) => number;
compute = (x, y) => x + y;

// 对象类型
// let obj: object = { x: 1 };
// obj.x = 3 // 类型“object”上不存在属性“x”。ts(2339)
let obj: { x: number } = { x: 1 };
obj.x = 2;
let obj2: Record<string, number> = { x: 1 };
obj2.x = 3;

/**
 * undefined null
 * 是任何类型的子类型, 说明它俩可以被赋值给其他类型
 * 有时报错, 需要修改 tsconfig.json -> compilerOptions.strictNullChecks: false
 */
let un: undefined;
let nu: null;
// 以下报错: 不能将类型“xxx”分配给类型“undefined”。
// nu = undefined;
// obj = undefined;

// void
let fn: () => void

// any
let x
x = 1

// never, 函数报错, 或者死循环, 则永远不会返回
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {

    }
}