# tsconfig.json 文件相关选项
## `demo` 使用方法: 
1. `cd src/07-tsconfig-json && tsc`
2. 测试时递归删除所有文件夹下面的 js 文件:
`find . -name "*.js" -type f -print -exec rm {} \; && tsc`
> 命令解析: 
> 
> 1. . 的意思是当前目录开始查找
> 2. `-name "*.js"` 文件名以 js 结尾
> 3. `-type f`, 查找的是文件, `-type d`, 查找的问价及文件夹
> 4. `-print` 将 `find` 命令的结果打印出来
> 5. `-exec` 执行后面的命令
> 6. `{}` `find` 命令的结果
> 7. `\;` `-exec` 命令的结束符, 反斜杠为转译字符

