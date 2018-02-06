/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = {
  SRC: path.resolve(__dirname, 'src'),
  DEST: path.resolve(__dirname, 'dist'),
}

const config = {
  entry: {
    main: paths.SRC,
  },
  output: {
    path: paths.DEST,
    publicPath: '',
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }, {
      test: /\.scss$/,
      use: [{
          loader: "style-loader"
      }, {
          loader: "css-loader"
      }, {
          loader: "sass-loader"
      }]
  }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash:8].css'),
    new HtmlWebpackPlugin({ template: path.join(paths.SRC, 'index.html') }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
  },
}

module.exports = config
