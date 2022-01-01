const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].[contenthash].js',
    publicPath: '/',
  },
  devServer: {
    static: '../dist',
    hot: true, // 热加载
    port: 8080,
    host: 'localhost', // 可以自己配置的host
    historyApiFallback: true, //设置url历史回退,解决vue-router刷新找不到路径问题
    // compress: false, // 服务器返回浏览器的时候是否启动gzip压缩
  },
})
