import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { serverConfig } from '../src/js/config/index.config.js';
const config = require('../webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  compress: true,
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: false
  }
}).listen(serverConfig.webpackDevServerPort, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Webpack dev server is listening at localhost:' + serverConfig.webpackDevServerPort);
});
