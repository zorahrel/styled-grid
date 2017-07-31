const ComponentDirectoryPlugin = require('component-directory-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    'styled-grid': './src/index.js',
    'docs': './docs/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'styledGridSystem'
  },
  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules'],
    plugins: [new ComponentDirectoryPlugin()]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      template: 'docs/index.html',
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase: './dist/',
    historyApiFallback: true
  }
}