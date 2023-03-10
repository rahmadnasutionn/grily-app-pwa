const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            }, ],
        }, ],
    },
    plugins: [
        new InjectManifest({
            swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
            swDest: './sw.bundle.js'
        }),
        new BundleAnalyzerPlugin(),
    ],
});