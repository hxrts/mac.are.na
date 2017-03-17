'use strict';

var path = require('path');

var webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  entry: './index.js',
  output: {
    path: 'dist',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader'],
      }
    ]
  },
};