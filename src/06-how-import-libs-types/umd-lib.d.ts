declare function UMDLib(opt: UMDLib.Options): void;

declare namespace UMDLib {
  const version: string;
  function doSomething(): void;
  // Options 也可以暴露到全局中去
  interface Options {
    [key: string]: any;
  }
}

/**
 * ts 专为 umd lib 开发的声明语句
 * umd lib 必填该声明语句
 */
export as namespace UMDLib

export = UMDLib