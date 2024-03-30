const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./base');
const argv = require('minimist')(process.argv.slice(2));

const backend = argv.backend || 'http://130.193.50.229:8080/';
const port = argv.port || 3000;

module.exports = (env) => merge(base(env), {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/,
          to: path.posix.join('/', 'index.html'),
        },
      ],
    },
    devMiddleware: {
      publicPath: '/',
    },
    hot: true,
    static: false,
    compress: true,
    host: 'localhost',
    port,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
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
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-CSRFToken, X-Requested-With, content-type, Authorization',
    },
  },
});
