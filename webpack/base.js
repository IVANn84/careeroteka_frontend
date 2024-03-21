const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const path = require('path');
const fs = require("fs");
const pkg = require("../package.json");
const webpack = require("webpack");

const themesEntry = fs.readdirSync(path.join(__dirname, '..', 'src', 'themes')).reduce((acc, themePath) => {
  const themeName = themePath.split('.')[0];
  const themeFileName = themeName === 'default'
    ? 'theme'
    : `theme-${themeName}`;

  acc[themeFileName] = path.join(__dirname, '..', 'src', 'themes', themePath);
  return acc;
}, {});

module.exports = ({
  entry: {
    ...themesEntry,
    index: path.join(__dirname, '..', 'src', 'index.tsx'),
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: '[name].js?v=[hash]',
    clean: true,
  },
  resolve: {
    alias: {
      'Util': path.join(__dirname, '..', 'src', 'utils'),
      'Page': path.join(__dirname, '..', 'src', 'pages'),
      'Component': path.join(__dirname, '..', 'src', 'components'),
      'Type': path.join(__dirname, '..', 'src', 'types'),
      'Api': path.join(__dirname, '..', 'src', 'api', 'methods'),
      'ApiDir': path.join(__dirname, '..', 'src', 'api'),
      'Mock': path.join(__dirname, '..', 'src', 'api', 'mock'),
      'Image': path.join(__dirname, '..', 'src', 'images'),
      'Hook': path.join(__dirname, '..', 'src', 'hooks'),
      'Hoc': path.join(__dirname, '..', 'src', 'hoc'),
    },
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, '..', 'public', 'favicon.ico'),
      template: path.join(__dirname, '..', 'public', 'index.html'),
      chunks: ['vendor', 'index', 'theme'],
    }),
    new RobotstxtPlugin({
      policy: [{
        userAgent: '*',
        disallow: ['/admin', '/swagger', '/api'],
        crawlDelay: 1,
      }],
    }),
    new CaseSensitivePathsPlugin(),
  ],
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== 'index';
      },
    },
    emitOnErrors: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                '@babel/preset-react',
                '@babel/preset-env',
              ],
              plugins: [
                ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
              ],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules|\.d\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.d\.ts$/,
        loader: 'ignore-loader'
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
});
