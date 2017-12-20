const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const root = path.resolve(__dirname, '..')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = merge(baseConfig, {
    entry: [
        'webpack/hot/dev-server', // 热替换处理入口文件
        path.join(root, 'src/main.js')
    ],
    devServer: {
        historyApiFallback: true, // 404的页面会自动跳转到/页面
        inline: true, // 文件改变自动刷新页面
        progress: false, // 显示编译进度
        //colors: true, // 使用颜色输出
        port: 3000, // 服务器端口
    },
    devtool: 'source-map', // 用于标记编译后的文件与编译前的文件对应位置，便于调试
    plugins: [
        //这里的HotModuleReplacementPlugin是webpack内置的插件，不需要安装
        //但HtmlWebpackPlugin需要自行安装：npm install --save-dev html-webpack-plugin
        new webpack.HotModuleReplacementPlugin() ,// 添加热替换插件
        //使用HtmlWebpackPlugin，实现js入口文件自动注入
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'), // 模板文件
            inject: 'body' // js的script注入到body底部
        }),
        new webpack.ProvidePlugin({
            $: 'jquery' ,
            'jQuery': 'jquery'
        }),
        new ExtractTextPlugin("styles.css"),
    ]
})


/*
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader"
            }) }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}*/
