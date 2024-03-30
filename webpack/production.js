const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = require('./base');

module.exports = (env) => merge(base(env), {
  stats: 'errors-warnings',
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
