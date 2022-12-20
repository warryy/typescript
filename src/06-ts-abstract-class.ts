/**
 * 抽象类及多态
 * ts 对 es 类进行了扩展
 * 扩展出了抽象类的概念: 只能被继承, 不能被实例化的类
 */

abstract class Animal {
  // 抽象类中的方法可以被子类继承使用
  eat() {
    console.log("animal 都用嘴吃饭");
  }
  // 抽象方法: 只定义了方法, 具体实现需要子类进行实现
  abstract say(): void;
}

// const ani = new Animal(); // 无法创建抽象类的实例。
class Dog extends Animal {
  say() {
    console.log('汪汪')
  }
}
let dog = new Dog();
dog.eat();

class Cat extends Animal {
  say() {
    console.log('喵喵')
  }
}

let cat = new Cat()
/**
 * 类的多态
 */
let animals = [dog, cat]
animals.forEach(a => a.say())

/**
 * 类的链式调用
 */
class WorkFlow {
  step1() {
    console.log('打开电脑')
    return this
  }
  step2() {
    console.log('工作')
    return this
  }
}
new WorkFlow().step1().step2()

/**
 * this 指针的多态
 */
class MyFlow extends WorkFlow {
  rest() {
    console.log('休息一会')
    return this
  }
}
new MyFlow().step1().rest().step2()

export {};
