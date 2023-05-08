const path = require('path');
const merge = require('webpack-merge');
const base = require('./base');
const argv = require('minimist')(process.argv.slice(2));

const backend = argv.backend || 'http://130.193.50.229:8080/';
const port = argv.port || 3000;

module.exports = merge(base, {
  devtool: 'eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/,
          to: path.posix.join('/', 'index.html'),
        },
      ],
    },
    contentBase: false,
    compress: true,
    host: '0.0.0.0',
    port: port,
    overlay: {
      warnings: false,
      errors: true,
    },
    publicPath: '/',
    proxy: {
      '/api': {
        target: backend,
        secure: false,
        changeOrigin: true,
      },
      '/swagger': {
        target: backend,
        secure: false,
        changeOrigin: true,
      },
      '/media': {
        target: backend,
        secure: false,
        changeOrigin: true,
      },
    },
    watchOptions: {
      poll: false,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-CSRFToken, X-Requested-With, content-type, Authorization',
    },
  },
});
