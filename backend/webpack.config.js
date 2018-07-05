var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  {
    name: "server",
    mode: "production",
    entry: [
      './src/index.js',
    ],
    output: {
      path: path.join(__dirname),
      filename: 'server.js',
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname),
      ],
      extensions: ['.js'],
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }],
    },
    target: 'node',
    plugins: [
      new UglifyJsPlugin(),
    ],
  },
  {
    name: "api",
    mode: "production",
    entry: [
      './src/api/index.js',
    ],
    output: {
      path: path.join(__dirname),
      filename: 'api.js',
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname),
      ],
      extensions: ['.js'],
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }],
    },
    target: 'node',
    plugins: [
      new UglifyJsPlugin(),
    ],
  },
];
