/**
 * 接口 & 类型断言 & (字符串|数字)索引签名 & 可选属性 & 只读属性
 */

interface List {
  id: number;
  name: string;
}

interface Args {
  data: List[];
}

function render(args: Args) {}

let args = {
  data: [
    {
      id: 2,
      name: "2",
      sex: "men",
    },
    {
      id: 1,
      name: "1",
    },
  ],
};

render(args);

// 直接传入多余的属性会报错
render({
  data: [
    {
      id: 2,
      name: "2",
      // sex: "men",
    },
    {
      id: 1,
      name: "1",
    },
  ],
});

// 解决上述问题可以用以下几种方法
// a. 类型断言
render({
  data: [
    {
      id: 2,
      name: "2",
      sex: "men",
    },
    {
      id: 1,
      name: "1",
    },
  ],
} as Args);
// b. 这种类型断言在 React 中有歧义, 不建议使用
render(<Args>{
  data: [
    {
      id: 2,
      name: "2",
      sex: "men",
    },
    {
      id: 1,
      name: "1",
    },
  ],
});
// c. 使用可选属性或者字符串索引签名
interface List2 {
  // 只读属性
  readonly age: number;
  id: number;
  name: string;
  // 可选属性
  sex?: string;
  // 字符串索引签名
  [x: string]: any;
}

/**
 * 数字索引签名
 */
interface StringArray {
  [x: number]: string;
}

let strArr: StringArray = ["1", "2"];

/**
 * 索引签名混用
 * 数字索引签名类型一定是字符串索引签名的子类型, 是因为 js 会将 number 索引进行类型转化, 转化为 string
 */
interface Names {
  [x: string]: string | number
  [x: number]: number
}

export {};