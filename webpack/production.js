const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = require('./base');

module.exports = merge(base, {
  stats: 'errors-warnings',
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
