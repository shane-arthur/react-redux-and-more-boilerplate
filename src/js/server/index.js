/* eslint global-require: 0 */
require('babel-core/register');
require('./data/startDb');

const path = require('path');
const webpackIsomorphicToolsConfig = require('../../../webpack/isomorphic.config.js');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

const rootDir = path.resolve(__dirname, '..', '..', '..');
global.__DEVELOPMENT__ = true; // eslint-disable-line no-underscore-dangle
global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
.server(rootDir, () => {
  require('./server');
});
