const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: { // 配置入口处
        index: './lib/index.tsx'
    },
    resolve: { //支持文件
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: { //出口
        // path:'./dist', 此写法错误在window与mac或者linux上文件路径并不都是/
        path: path.resolve(__dirname, 'dist/lib'),
        // 1、__dirname 代表最外层文件及frankUI
        // 2、path.resolve语法为连接文件
        library: 'frankUI', //库名
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
                loader: 'awesome-typescript-loader'
                // 1、正则匹配//
                // 2、在正则表达式中'.'需转义为'\.'
                // 3、'?'代表最后一位X无论有没有都去匹配，因此匹配ts与tsx文件
                // 4、'$'代表该正则表达式仅匹配末尾处，因此中途出现ts不进行匹配
                // 5、整个意思代表在文末匹配.ts或.tsx使用'awesome-typescrit-loader'进行解析
            }
        ]
    },
    plugins: [ //插件
        new HtmlWebpackPlugin({  //使用Html-webpack-plugin插件使根目录下的index.html变为weback的首页，并且自动引入入口文件（js、tsx）
            title: 'frankUI', //见index.html中title处
            template: 'index.html'
        })
    ],
    externals: {  //外部引用。不将react打包到项目内，因为ui包一定是会有react才下载ui包
        react: {
            commonjs: 'react', //对应的引入方式node
            commonjs2: 'react',
            amd: 'react',
            root: 'React' //script引入 window.React = .....
        },
        'react-dom': {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        }
    }
}