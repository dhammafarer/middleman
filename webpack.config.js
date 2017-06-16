const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'cheap-eval-source-map',
  context: path.resolve(__dirname, 'source'),
  entry: {
    vendor:['moment'],
    site: './javascripts/site.js'
  },
  output: {
    path: path.resolve(__dirname, '.tmp/dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {loader: 'eslint-loader'},
          {loader: 'babel-loader'}
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};

module.exports = config;
