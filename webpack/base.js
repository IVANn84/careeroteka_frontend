const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const path = require('path');

module.exports = (defined = {}) => {
    return {
        context: path.join(__dirname, '..', 'src'),
        entry: {
            index: './index.js',
            vendor: [
                'accounting-big',
                'big.js',
                'axios',
                'axios-case-converter',
                'clone',
                'immutability-helper',
                'jss',
                'jss-plugin-default-unit',
                'moment',
                'query-string',
                'react',
                'react-dom',
                'react-jss',
                'react-redux',
                'react-router-dom',
                'redux',
                'redux-thunk',
                'react-infinite-scroll-component',
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
                'Api': path.join(__dirname, '..', 'src', 'api', 'methods.js'),
                'Mock': path.join(__dirname, '..', 'src', 'api', 'mock.js'),
                'Image': path.join(__dirname, '..', 'src', 'images'),
            },
            modules: ['node_modules'],
        },
        plugins: [
            new webpack.DefinePlugin({
                REDUX_LOGGING: JSON.stringify(!!defined.REDUX_LOGGING),
            }),
            new HtmlWebpackPlugin({
                template: '../public/index.html',
                chunks: ['vendor', 'index'],
                base: defined.BASE || '',
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
                    disallow: ['/admin', '/login'],
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
                            '@babel/plugin-transform-runtime',
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
    };
};
