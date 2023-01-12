declare function GlobalLib(opt: GlobalLib.Options): void

declare namespace GlobalLib {
    const version: string
    function doSomething(): void
    // Options 也可以暴露到全局中去
    interface Options {
        [key: string]: any
    }
}