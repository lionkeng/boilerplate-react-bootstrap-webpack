// webpack.config.js
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

// from Pete Hunt's webpack-howto
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

// some params used in the config
var commonLoaders = [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /.*\.(gif|png|jpg)$/, loaders: ['file?hash=sha512&digest=hex&size=16&name=[hash].[ext]', 'image-webpack-loader?optimizationLevel=7&interlaced=false']},
      { test: /.*\.(eot|woff|ttf|svg)/, loader: 'file?hash=sha512&digest=hex&size=16&name=cd [hash].[ext]'},
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/},
      // { test: /\.js$/, loader: 'jsx-loader?harmony' }
]; 

var basicExtensions = ['', '.js', '.json', '.jsx'];

var config = {
  entry: {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/jsx/main.jsx')]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'       
  },
  resolve: {
    extensions: basicExtensions
  },
  module: {
    loaders: commonLoaders
  },
  plugins: [definePlugin],

};

module.exports = config;