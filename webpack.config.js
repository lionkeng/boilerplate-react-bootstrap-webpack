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
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
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