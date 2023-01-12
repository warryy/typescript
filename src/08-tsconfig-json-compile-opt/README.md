# tsconfig.json 编译相关选项: compilerOptions.xxx

## 学习方法:

> 1. `cd src/08-tsconfig-json-compile-opt`
> 2. `tsc`
> 3. 删除所有无用的 `js` 文件: `find . -path '*/test-js' -prune -o -name '*.js' -print -exec rm {} \;`

## 编译选项(tsconfig.json 中注释不方便写出来的, 放在这里)

### `lib`
如果 target: es5, 则默认为: ["dom", "es5", "scripthost"]
此时在工程文件中使用 es2019 的语法: `[1, 2, [3]].flat()`, ts 会报错
这时我们可以在把 lib 数组写为: ["dom", "es5", "scripthost", "es2019"], 这时就不会报错了
我尝试了下, target: es5 的时候 flat 函数不会报错, 可能类库文件默认引入的内容迭代了
不过这个例子可以解释 lib 的作用, 所以还放在这里


### `noEmitHelpers`
代码中有 `class` 继承的时候, `tsc` 打包后, 代码中会默认增加一个 `_extends` 函数用于实现类的继承
开启这个选项的时候, ts 不会将这个函数的实现打包到产物中, 此时需要将 `compilerOptions.importHelpers` 置为 `true`,
并在项目中安装 `tslib` 包, 此时打包产物中 `_extends` 函数将会从 `tslib` 包中引入, 从而优化打包产物体积

### `importHelpers`
配合 `noEmitHelpers` 使用, 进行包体积优化
