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
              '.es6',
              '.js',
              '.jsx',
              '.less',
              '.raw.less',
              '.scss',
              '.css',
              '.txt',
              '.md',
              '.json',
              '.png'
          ],
      },
      plugins: [
        // your custom plugins
      ],
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true,
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
                test: /\.(jsx|js|es6)?$/,
                loader: "babel",
                include: path.resolve(__dirname, "../node_modules/@hg/"),
                query: {
                    plugins: ["transform-runtime", "transform-object-rest-spread"],
                    presets: ["es2015", "es2016", "es2017", "react"]
                }
            },
            {
                test: /\.(jsx|js|es6)?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    "presets": ["latest", "react"]
                }
            },
            {
                test: /\.json?$/,
                loaders: ['json'],
                include: path.resolve(__dirname, '../'),
            },
            {
                test: /\.woff2$/,
                loader: 'url?mimetype=application/font-woff2',
                include: path.resolve(__dirname, "../node_modules/@hg/")
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ],
    },
};
