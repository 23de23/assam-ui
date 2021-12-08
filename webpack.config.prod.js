const base = require('./webpack.config');

module.exports =Object.assign({},base,{
    mode: 'production',
    externals: {  //外部引用。不将react打包到项目内，因为ui包一定是会有react才下载ui包
        // 仅在生产环境下失效，因此需要将webpack文件分为不同环境
        react: {
            commonjs: 'react', //对应的引入方式node
            commonjs2: 'react',
            amd: 'react',
            root: 'React' //script引入 window.React = .....
        },
        'react-dom': {
            commonjs: 'React',
            commonjs2: 'React',
            amd: 'React',
            root: 'ReactDOM'
        }
    }
})