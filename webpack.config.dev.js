const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =Object.assign({},base,{
  mode: 'development',
  entry: { // 配置入口处
    index: './example.tsx'
  },
  plugins: [ //插件
      new HtmlWebpackPlugin({  //使用Html-webpack-plugin插件使根目录下的index.html变为weback的首页，并且自动引入入口文件（js、tsx）
          title: 'assamUI', //见index.html中title处
          template: 'example.html'
      })
  ],
  devServer: {//设置开发者工具的端口号,不设置则默认为8080端口
    port:8888,
    host:'0.0.0.0'
}
}) 