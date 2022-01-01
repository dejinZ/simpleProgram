const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  target: 'web',
  entry: {
    app: './src/index.js',
  },
  output: {
    // filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
        // include: path.resolve(__dirname, 'src'), //指定loader 实际需要转换的模块
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(css|less)$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader', // 编译 Less -> CSS
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '我的学习',
      filename: path.resolve(__dirname, '../dist/index.html'), // html模板的生成路径
      template: 'index.html', //html模板
      inject: 'body',
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].banld.css',
    }),
  ],
}
