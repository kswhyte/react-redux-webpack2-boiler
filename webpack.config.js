const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: "./app/entry.es", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "app/public/js/bundle"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: "bundle.js", // string
    // the filename template for entry chunks

    publicPath: 'app/public' // Required for webpack-dev-server", // string
    // the url to the output directory resolved relative to the HTML page
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.(es|jsx?)$/,
        exclude: [/node_modules/, /tools/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'es2016', 'es2017'] },
        }],
      },


       {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                { loader: 'css-loader', query: { modules: true, sourceMaps: true } },
                'postcss-loader'
            ]
        })
      }


    ]
    /* Advanced module configuration (click to show) */
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules

    extensions: [".js", ".es", ".json", ".jsx", ".css"],
    // extensions that are used
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
    contentBase: [path.join(__dirname, "app"), path.join(__dirname, "app/public")],
    compress: true,
    port: 9000,
    publicPath: "app/public"
  },
  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  externals: ["react"],
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: "errors-only",
  // lets you precisely control what bundle information gets displayed

  plugins: [
    new webpack.LoaderOptionsPlugin({
        options: {
            context: path.root,
            postcss: [ // <---- postcss configs go here under LoadOptionsPlugin({ options: { ??? } })
                require('postcss-cssnext'),
                require('postcss-reporter')()
            ]
            // ...other configs that used to directly on `modules.exports`
        }
    }),
    new ExtractTextPlugin({ filename: '../../css/bundle/core.css', disable: false, allChunks: true })
  ],
  // list of additional plugins


  /* Advanced configuration (click to show) */
}
