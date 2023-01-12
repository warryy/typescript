const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path')

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "app.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/tpl/index.html",
    }),
    /**
     * ts 会将入口文件引入的所有关联文件打包, 
     * 但是 a.js 和 b.js 没有被入口文件引入, 所以无法打包到产物中,
     * 使用 copy-webpack-plugin, 可以将这类文件复制到自己想要的地方
     * 
     * to: 'static/xxx' 不可以写成 '/static', 因为这个目录是相对目录, 改成以 / 开头, 则会打包到系统根目录中
     */
    new CopyPlugin({
      patterns: [
        {
          from: 'src/04-namespace/a.js',
          to: 'static/04-namespace/a.js'
        },
        {
          from: 'src/04-namespace/b.js',
          to: 'static/04-namespace/b.js'
        },
        {
          from: 'src/06-how-import-libs-types/',
          to: 'static/06-how-import-libs-types/'
        },
      ]
    })
  ],
};
