module.exports = require('../webpack.config.js');

// const path = require('path');
// const webpack = require('webpack');
// const { getIfUtils, removeEmpty } = require('webpack-config-utils');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// const nodeEnv = process.env.NODE_ENV || 'development';
// const { ifDevelopment, ifProduction } = getIfUtils(nodeEnv);

// module.exports = removeEmpty({
//   entry: './src/index.js',

//   output: {
//     filename: ifProduction('[name]-bundle-[hash].js', '[name]-bundle.js'),
//     path: path.resolve(__dirname, 'public'),
//   },
//   resolve: {
//     extensions: [
//         '.es',
//         '.js',
//         '.jsx',
//         '.less',
//         '.raw.less',
//         '.scss',
//         'css',
//         '.txt',
//         '.md',
//         '.json',
//         '.png'
//     ],
//     alias: {
//       '@hg/three-ui': '@hg/three-ui/src/components'
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
//         use: [{ loader: 'url-loader' }]
//       },
//       {
//         test: /\.(less)$/,
//         loader: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader', 'less-loader'],
//         }),
//       },
//       {
//         test: /\.css$/,
//         loader: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader'],
//         }),
//       },
//       {
//         test: /\.js/,
//         use: ['babel-loader?cacheDirectory'],
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.(es|es6|jsx?)$/,
//         include: [/node_modules\/@hg/],
//         use: [
//           {
//             loader: 'babel-loader'
//           }
//         ]
//       },
//     ],
//   },

//   devtool: ifDevelopment('eval-source-map', 'source-map'),

//   devServer: ifDevelopment({
//     host: '0.0.0.0',
//     port: 3000,
//     stats: 'normal',
//   }),

//   externals: {
//     'jsdom': 'window',
//     'cheerio': 'window',
//     'react/lib/ExecutionEnvironment': true,
//     'react/lib/ReactContext': 'window',
//     'react/addons': true,
//   },

//   plugins: removeEmpty([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify(nodeEnv),
//       },
//     }),

//     ifProduction(new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }])),

//     ifProduction(
//       new ExtractTextPlugin('[name]-bundle-[hash].css'),
//       new ExtractTextPlugin('[name]-bundle.css')
//     ),
//   ]),
// });