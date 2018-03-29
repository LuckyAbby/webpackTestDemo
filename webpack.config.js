const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    index: './src/index.js',
    component: './src/component.js',
    imgComponent: './src/imgComponent.js',
    common: [ // 第三方库可以统一放在这个入口一起合并
      'lodash'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 抽取出的模块的模块名
    }),
  ],
};
