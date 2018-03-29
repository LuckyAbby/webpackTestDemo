const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CommonConfig = require('./webpack.config.js');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new UglifyJSPlugin()
  ]
});
