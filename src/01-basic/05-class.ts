/**
 * 类
 * a. 类成员的属性都是实例属性, 而不是原型属性
 * b. 类成员的方法都是原型方法
 * c. 修饰符 public, private, protected, static
 */

/**
 * 修饰符
 * a. 属性默认都是 public
 */
class Dog {
  constructor(name: string) {
    this.name = name;
  }
  public name: string;
  run() {}
}

console.log(Dog.prototype);
let dog = new Dog("good");
console.log(dog);

/**
 * 类的继承
 */
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
  color: string;
}

/**
 * 修饰符: private 私有成员
 * 只能在类中被调用
 * a. 属性或方法只能本身被调用
 * b. 构造函数如果被 private 修饰, 则该类既不可以被实例化, 也不能被继承
 */
class Cat {
  //   private constructor(n: string) { // 既不可以被实例化, 也不能被继承
  //     this.name = n;
  //   }
  constructor(n: string) {
    this.name = n;
    this.protect = `${n}(受保护的猫原名)`
  }
  name: string;
  private priFn() {}
  private pri = "private prop";
  protected protect?: string;
  static staFn() {
    console.log("我是静态方法");
  }
}

class BuOu extends Cat {
  constructor(n: string, c: string) {
    super(n);
    this.color = c;
    this.protect = `${this.protect}(受保护的布偶原名)`
  }
  color: string;
  // hello() {console.log(this.pri)} // Property 'pri' is private and only accessible within class 'Cat'.
}

const cat = new Cat("小花");
// cat.priFn() // 属性“priFn”为私有属性，只能在类“Cat”中访问。
const buou = new BuOu("布偶", "灰色");
// buou.priFn() // 属性“priFn”为私有属性，只能在类“Cat”中访问。
// buou.pri // 属性“pri”为私有属性，只能在类“Cat”中访问。

/**
 * 修饰符: protected 保护成员
 * a. 只能在类或者其子类中被使用, 实例不可用
 * b. 构造函数被 protected, 则不能被实例化, 只能被继承
 */

// cat.protect // 属性“protect”受保护，只能在类“Cat”及其子类中访问。
// buou.protect // 属性“protect”受保护，只能在类“Cat”及其子类中访问。
class Animal {
  protected constructor() {}
}
// const ani = new Animal() // 类“Animal”的构造函数是受保护的，仅可在类声明中访问。ts(2674)
class Cattle extends Animal {
  constructor() {
    super();
  }
}

/**
 * 修饰符
 * 构造函数参数也可以被修饰, 相当于默认定义了类的属性
 */
class Test {
  constructor(public name: string) {
    this.name = name;
  }
  //   public name: string; // 标识符“name”重复。
}

/**
 * 修饰符: static 静态成员
 * 只能通过类名调用, 实例不可调用
 */
Cat.staFn();
// cat.staFn(); // 属性“staFn”在类型“Cat”上不存在。你的意思是改为访问静态成员“Cat.staFn”吗?ts(2576)
BuOu.staFn();
// buou.staFn() // 属性“staFn”在类型“BuOu”上不存在。你的意思是改为访问静态成员“BuOu.staFn”吗?

export {};