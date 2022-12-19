/**
 * cheap: 文件调试忽略列信息
 * module: 定位到 ts 源码
 * eval-source-map 将 source-map 以 data-url 形式打包到文件中
 */
module.exports = {
    devtool: 'cheap-module-eval-source-map'
}