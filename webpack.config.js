const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    index: './src/index.js',
    imgComponent: './src/imgComponent.js',
    // vendor: [ // 第三方库可以统一放在这个入口一起合并
    //   'lodash'
    // ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // webpack4 使用这个配置项拆分打包 需要升级 webpack到4
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(jpg|png|jpeg)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack test demo',  // 生成的 HTML 文件的标题
      filename: 'index.html' // 生成的 HTML 文件的文件名，默认 `index.html`
    }),
    new CleanWebpackPlugin(['dist']),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor' // 抽取出的模块的模块名
    // }),
  ],
};
