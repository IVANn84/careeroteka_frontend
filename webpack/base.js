const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const path = require('path');

module.exports = ({
    context: path.join(__dirname, '..', 'src'),
    entry: {
        index: './index.js',
        vendor: [
            'accounting-big',
            'big.js',
            'axios',
            'axios-case-converter',
            'clone',
            'jss',
            'jss-plugin-default-unit',
            'jss-plugin-vendor-prefixer',
            'moment',
            'query-string',
            'react',
            'react-dom',
            'react-jss',
            'react-router',
            'react-router-dom',
            'react-infinite-scroll-component',
            'react-sticky-el',
            'react-chartjs-2',
            'react-content-loader',
            'chart.js',
            'mobx',
            'mobx-react-lite',
            'mobx-state-tree',
        ],
    },
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: '[name].js?v=[hash]',
    },
    resolve: {
        alias: {
            'Util': path.join(__dirname, '..', 'src', 'utils'),
            'Page': path.join(__dirname, '..', 'src', 'pages'),
            'Component': path.join(__dirname, '..', 'src', 'components'),
            'Api': path.join(__dirname, '..', 'src', 'api', 'methods'),
            'Mock': path.join(__dirname, '..', 'src', 'api', 'mock'),
            'Image': path.join(__dirname, '..', 'src', 'images'),
            'Hook': path.join(__dirname, '..', 'src', 'hooks'),
            'Hoc': path.join(__dirname, '..', 'src', 'hoc'),
            'Theme': path.join(__dirname, '..', 'src', 'themes'),
            '/media': path.join(__dirname, 'media'),
            '/swagger': path.join(__dirname, 'swagger'),
        },
        modules: ['node_modules'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../public/index.html',
            chunks: ['vendor', 'index'],
        }),
        new FaviconsWebpackPlugin({
            logo: '../public/favicon.png',
            mode: 'webapp',
            devMode: 'light',
            favicons: {
                developerURL: null,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    favicons: true,
                    windows: false,
                    yandex: false,
                },
            },
            shortcuts: [
                {
                    name: 'Careeroteka',
                    description: 'Энциклопедия о карьере с данными от реальных специалистов и экспертов',
                    url: '/',
                    icon: './images/main-header.png',
                },
            ],
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
        minimizer: [new TerserPlugin({
            chunkFilter: chunk => chunk.name === 'vendor',
            cache: true,
            parallel: 2,
        })],
        splitChunks: {
            chunks(chunk) {
                return chunk.name !== 'index';
            },
        },
        noEmitOnErrors: true,
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
                test: /\.(jsx?)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
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
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'file-loader',
            },
        ],
    },
});
