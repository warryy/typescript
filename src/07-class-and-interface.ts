/**
 * 类和接口的关系
 * a. 类接口可以约定类的属性和方法, 但是类声明中还是要再声明一遍
 * b. 类需要实现接口所有属性
 * c. 接口生命的都是类的共有成员 public
 */
interface Animal {
  name: string;
  age: number;
}

class Dog implements Animal {
  constructor(n: string, age: number) {
    this.name = n;
    this.age = age;
  }
  //   private name // 类“Dog”错误实现接口“Animal”。属性“name”在类型“Dog”中是私有属性，但在类型“Animal”中不是。
  name;
  age;
}

/**
 * 一个接口可以继承多个接口
 */
interface Cat extends Animal {
  say(): void;
}

interface Child extends Animal {
  cry(): void;
}

interface LittleCat extends Cat, Child {}

let littleCat: LittleCat = {
  say() {},
  name: "小猫",
  age: 0,
  cry() {},
};

/**
 * 接口继承类
 * a. 接口继承类的时候, 会将 公共成员, 保护成员, 私有成员 全部继承
 */
class Auto {
  state = 1;
  private pri = "pri";
  static sta = "静态属性";
}

interface AutoInterface extends Auto {}

// // 类“C”错误实现接口“AutoInterface”。类型具有私有属性“pri”的单独声明。
// class C implements AutoInterface {
//   state = 3;
// }

class CC extends Auto implements AutoInterface {}

// 接口和类的关系请看下图
// https://warryy.github.io/images/class/class-and-interface.jpg

export {};
