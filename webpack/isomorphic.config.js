var plugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  assets: {
    images: {
      extensions: ['gif', 'jpg', 'png', 'ico'],
      parser: plugin.url_loader_parser,
    },
  },
};