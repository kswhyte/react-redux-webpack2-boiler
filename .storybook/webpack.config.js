// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

module.exports = {
  resolve: {
    root: [
        __dirname,
        path.join(__dirname, 'src'),
        path.join(__dirname, 'src/components'),
        path.resolve(__dirname, '../node_modules'),
    ],
    modulesDirectories: ['src', 'node_modules'],
    extensions: [
            '',
            '.es',
            '.js',
            '.jsx',
            '.less',
            '.raw.less',
            '.scss',
            'css',
            '.txt',
            '.md',
            '.json',
            '.png'
        ],
    alias: {
        "hg3tracker": "@hg/three-ui/HgTracker/mockTracker",
        "@hg/three-ui": "@hg/three-ui/src/components",
        "@hg/search-ui": "@hg/search-ui/src/components"
    }
  },
  plugins: [
    // your custom plugins
  ],
  externals: {
      'jsdom': 'window',
      'cheerio': 'window',
      'react/addons': true, // important!!
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
  module: {
    loaders: [
        {
            test: /\.less$/,
            loaders: ["style", "css", "less"],
        },
        {
            test: /\.css$/,
            loaders: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.(jsx|js|es)?$/,
            loader: "babel",
            include: path.resolve(__dirname, "../node_modules/@hg/"),
            query: {
                plugins: ["transform-runtime", "transform-object-rest-spread"],
                presets: ["es2015", "es2016", "es2017", "react"]
            }
        },
        {
            test: /\.(jsx|js|es)?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                "presets": ["es2015", "es2016", "es2017", "react"]
            }
        },
        {
            test: /\.woff2$/,
            loader: 'url?mimetype=application/font-woff2',
            include: path.resolve(__dirname, "../node_modules/@hg/")
        },
        {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            loader: 'url-loader'
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }
    ],
  },
};
