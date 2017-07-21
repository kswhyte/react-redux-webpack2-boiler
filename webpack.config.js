const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:9000",
      "webpack/hot/only-dev-server",
      "./src/entry.es6"
    ]
  },

  output: {
    path: path.resolve(__dirname, "dist"),

    filename: "bundle.js",

    publicPath: '/js/'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
       {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            use: [
              {loader: 'url-loader'}
            ]
        },
      {
        test: /\.woff2$/,
        use: [
          {loader: 'url?mimetype=application/font-woff2'}
        ]
      },
      {
        test: /\.(es|es6|jsx?)$/,
        exclude: [/node_modules/, /tools/],
        use: ['babel-loader'],
      },
      {
        test: /\.(es|es6|jsx?)$/,
        include: [/node_modules\/@hg/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
     {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader'},
          { loader: 'postcss-loader'}
        ]
      }

    ]
  },
  resolve: {
    alias: {
      "@hg/three-ui": "@hg/three-ui/src/components"
    },
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],

    extensions: [".js", ".es6", ".es", ".json", ".jsx", ".css", ".less"],
  },

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devServer: {
    contentBase: [path.join(__dirname, "src"), path.join(__dirname, "src/public"), path.join(__dirname, "dist")],
    compress: true,
    port: 9000,
    publicPath: "/js/",
    hot: true,
    historyApiFallback: true
  },
  target: "web",

  externals: {
     'jsdom': 'window',
     'cheerio': 'window',
     'react/lib/ExecutionEnvironment': true,
     'react/lib/ReactContext': 'window',
     'react/addons': true,
   },

  stats: "errors-only",

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
        options: {
            context: path.root,
            postcss: [ // <---- postcss configs go here under LoadOptionsPlugin({ options: { ??? } })
                require('postcss-cssnext'),
                require('postcss-reporter')()
            ]
        }
    })

  ]
}
