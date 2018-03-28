const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    component: './src/component.js',
    imgComponent: './src/imgComponent.js',
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
    })
  ],
};
