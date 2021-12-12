const path = require('path')

module.exports = {
    entry: { // 配置入口处
        index: './lib/index.tsx'
    },
    resolve: { //支持文件
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias:{
            "@":path.resolve("./"),
            "@lib":path.resolve("lib")
        },
    },
    output: { //出口
        // path:'./dist', 此写法错误在window与mac或者linux上文件路径并不都是/
        path: path.resolve(__dirname, 'dist/lib'),
        // 1、__dirname 代表最外层文件及frankUI
        // 2、path.resolve语法为连接文件
        library: 'assamUI', //库名
        libraryTarget: 'umd' //模块版本 umd|commonjs|amd
        // 1、最早期使用<script src=1.js>引入js文件，这样会使变量冲突
        // 2、然后出现了amd（a:异步，m:模块,d:定义）,基本语法为define（function（）{var a = 1}）这样使变量都在函数内生效。
        // 3、node.js推出了commonJS，语法为module.exports={}
        // 4、因为amd只在浏览器使用、commonJS在nodeJS使用，因此最后出现了umd统一兼容两种版本，核心原理为if（define）else（module）既使if判断有define使用amd有module使用commonJS最后使用script引入
    },
    module: { //模块配置
        rules: [ //规则
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-typescript'
                  ]
                }
            //     // 1、正则匹配//
            //     // 2、在正则表达式中'.'需转义为'\.'
            //     // 3、'?'代表最后一位X无论有没有都去匹配，因此匹配ts与tsx文件
            //     // 4、'$'代表该正则表达式仅匹配末尾处，因此中途出现ts不进行匹配
            //     // 5、整个意思代表在文末匹配.ts或.tsx使用'awesome-typescrit-loader'进行解析
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
                // 1、从右往左执行loader
                // 2、先sass-loader将scss文件通过字符串形式在内存中转为css形式语法，在通过css-loader将字符串转为对象，最后style-loader将对象转为<style>加载到页面中。
                // 3、js如何将style对象变为style标签 => document.createElement('style')  innerHtml = 'css对象'  document.head.appchild(style)

            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                  'file-loader'
                ]
              }
        ]
    }
}