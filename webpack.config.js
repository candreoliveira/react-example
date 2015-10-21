var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    "0.app": "./config/app",
    "1.analytics": "./config/analytics",
    "2.story": "./config/story",
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.html$/, loader: "html-loader"},
      { test: /\.js$/, loader: "babel?stage=0&optional[]=runtime", exclude: /(node_modules|bower_components)/ },
      { test: /\.jsx$/, loader: "babel?stage=0&optional[]=runtime"}
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  resolve: {
    root: path.join(__dirname, "components"),
    extensions: ['', '.js', '.jsx', '.css', '.html']
  },
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      filename: 'index.html',
      template: 'index.tmpl.html',
      inject: false
    })
  ]
};
