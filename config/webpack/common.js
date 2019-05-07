// shared config (dev and prod)
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    context: resolve(__dirname, '../../src'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'awesome-typescript-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}}],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?name=sha512&digest=hex&name=images/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
                ],
            },
            {
                test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ],
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({template: 'index.html.ejs',}),
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    performance: {
        hints: false,
    },
};
