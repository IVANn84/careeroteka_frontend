import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { Configuration } from 'webpack';
import * as tsconfigToSwcconfig from 'tsconfig-to-swcconfig';
import TerserPlugin from 'terser-webpack-plugin';
import RobotstxtPlugin from 'robotstxt-webpack-plugin';
import path from 'path';
import minimist from 'minimist';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import fs from 'fs';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { CustomResolver, WHITELABEL_DIR_NAME } from './webpack/utils/resolver';
import { availableWhitelabel, isDefault } from './webpack/utils/availableWhitelabel';

const argv = minimist(process.argv.slice(2));

const backend = argv.backend || 'http://130.193.50.229:8080/';
const port = argv.port || 3000;

export const devServer = (): Configuration => {
  const devServerConfig: DevServerConfiguration = {
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
  };
  return {
    devServer: devServerConfig,
  };
};

export const loadPage = (brand?: string): Configuration => {
  const brandTemplatePath = path.join(__dirname, './public', WHITELABEL_DIR_NAME, `/index.${brand}.html`);
  const templatePath = fs.existsSync(brandTemplatePath)
    ? brandTemplatePath
    : path.join(__dirname, './public/index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Не найден файл ${templatePath}`);
  }

  return {
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: ['html-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: templatePath,
        favicon: isDefault(brand)
          ? path.join(__dirname, './public/favicon.ico')
          : undefined,
      }),
    ],
  };
};

export const loadCSS = (): Configuration => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
});

export const optimizeCSS = (): Configuration => ({
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
});

export const loadTS = (): Configuration => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        include: path.join(__dirname, './src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'swc-loader',
            options: tsconfigToSwcconfig.convert('./tsconfig.json'),
          },
        ],
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
});

export const optimizeJS = (): Configuration => ({
  optimization: {
    minimizer: [
      '...',
      new TerserPlugin(),
    ],
  },
});

export const loadImages = (): Configuration => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset',
      },
    ],
  },
});

export const optimizeCode = (): Configuration => ({
  optimization: {
    runtimeChunk: { name: 'runtime' },
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 10000,
      maxSize: 40000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  },
});

export const loadFonts = (): Configuration => ({
  module: {
    rules: [
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
});

export const resolve = (): Configuration => ({
  resolve: {
    alias: {
      Theme: path.join(__dirname, './src/themes'),
      Util: path.join(__dirname, './src/utils'),
      Page: path.join(__dirname, './src/pages'),
      Component: path.join(__dirname, './src/components'),
      Type: path.join(__dirname, './src/types'),
      Api: path.join(__dirname, './src/api/methods'),
      ApiDir: path.join(__dirname, './src/api'),
      Mock: path.join(__dirname, './src/api/mock'),
      Image: path.join(__dirname, './src/images'),
      Hook: path.join(__dirname, './src/hooks'),
      Hoc: path.join(__dirname, './src/hoc'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});

export const cleanOutputDir = (): Configuration => ({
  output: {
    clean: true,
  },
});

export const robotstxt = (): Configuration => ({
  plugins: [
    new RobotstxtPlugin({
      policy: [{
        userAgent: '*',
        disallow: ['/admin', '/swagger', '/api'],
        crawlDelay: 1,
      }],
    }),
  ],
});

export const outputFilenames = (): Configuration => ({
  output: {
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
  },
});

export const resolveWhitelabel = (brand?: string): Configuration => {
  if (brand && !availableWhitelabel.includes(brand)) {
    throw new Error(`${brand} нет в списке доступных брендов: ${availableWhitelabel.join(', ')}`);
  }

  return {
    output: {
      path: path.join(__dirname, './build', brand || 'default'),
    },
    resolve: {
      plugins: [isDefault(brand) ? null : CustomResolver(brand)],
    },
  };
};
