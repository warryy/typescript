# 命名空间(内部模块[老的名字])
## es module 未出现时, ts 出的模块化开发方式

## 引用方法
`b.ts` 文件中使用 `a.ts` 文件中定义的函数, 则需要在 `b.ts` 文件顶部加上以下代码
`/// <reference path="./a.ts" />`

## demo 使用方法
1. 放开 `tpl/index.html` 的 `script` 引入方法
2. `pnpm start:namespace`