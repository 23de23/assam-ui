const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =Object.assign({},base,{
  mode: 'development',
  plugins: [ //插件
      new HtmlWebpackPlugin({  //使用Html-webpack-plugin插件使根目录下的index.html变为weback的首页，并且自动引入入口文件（js、tsx）
          title: 'frankUI', //见index.html中title处
          template: 'index.html'
      })
  ],
}) 