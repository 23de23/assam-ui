const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')



module.exports =Object.assign({},base,{
    mode: 'production',
    entry: { // 配置入口处
        example: './example.tsx'
    },
    output: { //出口
        path: path.resolve(__dirname, 'doc/lib'),
    },
    plugins: [ //插件
        new HtmlWebpackPlugin({  //使用Html-webpack-plugin插件使根目录下的index.html变为weback的首页，并且自动引入入口文件（js、tsx）
            title: 'assamUI', //见index.html中title处
            template: 'example.html',
            filename: 'example.html'
        })
    ],
})