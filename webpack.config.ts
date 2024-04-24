import type { Configuration } from 'webpack';

import merge from 'webpack-merge';
import path from 'path';
import minimist from 'minimist';

import { availableWhitelabel } from './webpack/utils/availableWhitelabel';
import * as parts from './webpack.parts';

const argv = minimist(process.argv.slice(2));

const mode: 'development' | 'production' = argv.mode || 'production';

type Env = {[key: string]: string};

const commonConfig = (brand?: string): Configuration => merge([
  {
    entry: {
      index: path.join(__dirname, './src/index.tsx'),
    },
    output: {
      path: path.resolve(__dirname, 'build'),
    },
  },
  parts.cleanOutputDir(),
  parts.resolve(),
  parts.outputFilenames(),
  parts.resolveWhitelabel(brand),

  parts.loadPage(brand),
  parts.loadCSS(),
  parts.loadFonts(),
  parts.loadImages(),
  parts.loadTS(),
]);

const productionConfig: Configuration = merge([
  {
    target: 'browserslist',
    stats: 'errors-warnings',
  },
  parts.optimizeCode(),
  parts.optimizeCSS(),
  parts.optimizeJS(),
  parts.robotstxt(),
]);

const developmentConfig: Configuration = merge([
  {
    target: 'web',
    devtool: 'eval-source-map',
  },
  parts.devServer(),
]);

const getConfig = (env?: Env): Configuration | Configuration[] => {
  switch (mode) {
    case 'production':
      return (env?.brand ? [env.brand] : availableWhitelabel)
        .map(brand => merge([commonConfig(brand), productionConfig, { mode }]));
    case 'development':
      return merge([commonConfig(env?.brand), developmentConfig, { mode }]);
    default:
      throw new Error(`Неизвестный режим работы: ${mode}`);
  }
};

// noinspection JSUnusedGlobalSymbols
export default (env?: Env) => getConfig(env);
