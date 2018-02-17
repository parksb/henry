const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  entry: {
    'mainBundle': './src/main.js',
    'pageBundle': './src/page.js',
    'indexBundle': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/src/'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist/',
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          },
        }
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, './public/'),
      to: path.join(__dirname, './dist/')
    }]),
    new HardSourceWebpackPlugin()
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.webpack.js', '.web.js', '.js', '.json', 'jsx', 'css']
  },
  node: {
    console: false,
    global: true,
    process: true,
    Buffer: true,
    setImmediate: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};