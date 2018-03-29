const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true, // 告诉 dev-server 使用 HMR
    hotOnly: true, // 如果热加载失败了禁止刷新页面，便于知道失败原因
    host: '127.0.0.1',
    port: 8088,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
