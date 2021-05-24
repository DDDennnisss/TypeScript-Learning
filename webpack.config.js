//引入一个包
const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean插件
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
        use: [
          //配置babel
          {
            loader: "babel-loader",
            //设置babel
            options: {
              //设置预定义的环境
              presets: [
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    //兼容的目标浏览器
                    targets: {
                      "chrome": "88",
                      "ie": "11"
                    },
                    //指定corejs版本
                    "corejs": "3",
                    //使用corejs的方式
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          "ts-loader",
        ],
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
  },


}