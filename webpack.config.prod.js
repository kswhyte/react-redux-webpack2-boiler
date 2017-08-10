const path = require('path');
const webpack = require('webpack');
import HtmlWebpackPlugin from 'html-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV' : JSON.stringify('production')
}

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/entry.es6'
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: [{ loader: 'url-loader' }]
      },
      {
        test: /\.woff2$/,
        use: [{ loader: 'url-loader?mimetype=application/font-woff2' }]
      },
           {
        test: /\.(es|es6|jsx?)$/,
        include: [
          path.resolve(__dirname, "node_modules/@hg/")
        ],
        use: ['babel-loader']
      },
      {
        test: /\.(es|es6|jsx?)$/,
        exclude: [/node_modules/, /tools/],
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader' }, { loader: 'postcss-loader' }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@hg/three-ui': '@hg/three-ui/src/components'
    },
    modules: ['node_modules', path.resolve(__dirname, 'src')],

    extensions: ['.js', '.es6', '.es', '.json', '.jsx', '.css', '.less']
  },

  externals: {
    jsdom: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
