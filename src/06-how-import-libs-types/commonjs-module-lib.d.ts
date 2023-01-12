declare function CommonJSModuleLib(opt: CommonJSModuleLib.Options): void;

declare namespace CommonJSModuleLib {
  const version: string;
  function doSomething(): void;
  // Options 也可以暴露到全局中去
  interface Options {
    [key: string]: any;
  }
}

export = CommonJSModuleLib