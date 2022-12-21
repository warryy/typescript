/**
 * 高级类型:
 *    交叉类型 & 联合类型
 */

interface IDog {
  run(): void;
}

interface ICat {
  jump(): void;
}

let pet: IDog & ICat = {
  run() {},
  jump() {},
};

/**
 * 联合类型
 */
let a: number | string = "a";
let b: "a" | "b" | 1;

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  w: number;
  h: number;
}

type Shape = Square | Rectangle;

function getArea(a: Shape): number {
  switch (a.kind) {
    case "square":
      return a.size * a.size;
    case "rectangle":
      return a.w * a.h;
    default:
      return 0;
  }
}
