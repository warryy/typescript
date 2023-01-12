/**
 * 类型保护
 *      a. in
 *      b. instanceof
 *      c. typeof
 *      d: is: type predicates(类型谓词)
 * 类型收窄
 */

class Cat {
  name: string = "猫";
  nick: string = "nick";
  miao() {}
  cainai() {}
}
class Dog {
  name: string = "狗";
  nick: number = 1;
  wang() {}
}

function isCat(ani: Cat | Dog): ani is Cat {
  return !!(ani as Cat).miao;
}

function play(animal: Cat | Dog) {
  // if (animal.miao) {
  //     animal.miao()
  // } else {
  //     animal.wang()
  // }

  //   in 操作符
  if ("miao" in animal) {
    animal.miao();
    animal.cainai();
  } else {
    animal.wang();
  }

  //   instanceof 适用于类
  if (animal instanceof Cat) {
    animal.miao();
    animal.cainai();
  } else {
    animal.wang();
  }

  // 使用类型谓词
  if (isCat(animal)) {
    animal.miao();
    animal.cainai();
  } else {
    animal.wang();
  }
}

function getLen(arg: string | Number) {
  // 使用 typeof
  if (typeof arg === "string") {
    return arg.length;
  }
  return arg.toString().length;
}

let a = "asdf";
a; // string

/**
 * narrowing types using 'as const'
 * 通过使用 as const 来进行类型收窄
 */
let b = "asdf" as const;
b; // 'asdf'

export {}