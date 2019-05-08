// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');
const {resolve} = require('path');

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
        './adapters/primaries/uicomponents/index.tsx' // the entry point of our app
    ],
    output: {
        filename: 'js/bundle.[name].js',
        path: resolve(__dirname, '../../dist'),
        publicPath: '/',
    },
    devServer: {
        hot: false, // enable HMR on the server,
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'INMEMORY': '"true"'
            }
        })
    ],
});
