const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack所有的配置信息都要写在module.export里
module.exports = {
  // 入口文件
  entry: "./src/index.ts",

  // 指定打包文件目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        //test指定的是规则生效的文件
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node-modules/
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),
  ],

  resolve: {
    extensions: ['.ts', ".js"]
  }
}