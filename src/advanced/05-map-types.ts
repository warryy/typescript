/**
 * 映射类型: 一种预先定义的泛型接口
 *      同态: Readonly, Partial, Pick, 只会作用于现有属性, 不会引入新的属性
 *      非同态: Record
 */

interface Obj {
  a: number;
  b: number;
}

type ReadonlyObj = Readonly<Obj>;
/**
 * keyof T: T 的所有属性的联合类型
 * P in: 相当于 for in, 将 keyof T 的联合类型映射到 P 上
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type PartialObj = Partial<Obj>;

type PickObjA = Pick<Obj, "a">;

type NewObj = Record<"x" | "y", Obj>;
