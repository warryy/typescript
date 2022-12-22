/**
 * 条件类型:
 *      T extends U ? X : Y
 *          T extends U: 类型 T 可以被赋值给 U
 * 分布式条件类型
 *      (A | B) extends U ? X : Y
 *          等价于: (A extends U ? X : Y) | (B extends U ? X : Y)
 */
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends null
  ? "null"
  : T extends undefined
  ? "undefined"
  : T extends Symbol
  ? "symbol"
  : T extends Function
  ? "function"
  : "object";

type T1 = TypeName<string>;
type T2 = TypeName<string | number[] | string[] | Symbol>;

/**
 * 分布式条件类型
 *      Exclude:
 *          type Exclude<T, K> = T extends K ? never : T
 *      Exclude<"a" | "b" | "c", "a" | "e">
 *      =>
 *      Exclude<"a", "a" | "e"> | Exclude<"b", "a" | "e"> | Exclude<"c", "a" | "e">
 *      => never | "b" | "C"
 *      => "b" | "C"
 */
type Test = Exclude<"a" | "b" | "c", "a" | "e">;

/**
 * 抽取
 */
type Test2 = Extract<"a" | "b" | "c", "a" | "e">;
/**
 * 去除 null 和 undefined
 */
type Test3 = NonNullable<string | null | undefined>;
type Test4 = NonNullable<null | undefined>;

/**
 * 抽取函数返回值
 *      type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
 *      a. 首先, T 可以被赋值给一个函数类型
 *      b. infer 为待推断的意思, 意思是如果, 所以条件类型表达式为: 推断出函数的类型后, 返回函数类型, 否则返回 any
 */
type T4 = ReturnType<() => string>;
