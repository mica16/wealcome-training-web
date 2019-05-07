// production config
const merge = require('webpack-merge');
const {resolve} = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './adapters/primaries/uicomponents/index.tsx',
  output: {
    filename: 'js/bundle.[name].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [],
});
