var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/app/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    publicPath: '/client/dist',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
