const config = require('../webpack.config.js');
const path = require('path');
const webpack = require('webpack');

const isVerbose = process.argv.indexOf('-v') !== -1;

const envPlugin = new webpack.DefinePlugin({
  __VERBOSE__: isVerbose,
  __DEBUG__: true,
  'process.env.NODE_ENV': "development"
});

const pluginsStorybook = [
    new webpack.LoaderOptionsPlugin({
        options: {
            context: path.root,
            postcss: [ // <---- postcss configs go here under LoadOptionsPlugin({ options: { ??? } })
                require('postcss-cssnext'),
                require('postcss-reporter')()
            ]
        }
    }),
    envPlugin
  ];


module.exports = function(storybookConfig, storybookEnv) {
  storybookConfig.module = config.module;
  storybookConfig.resolve = config.resolve;
  storybookConfig.node = config.node;
  storybookConfig.externals = config.externals;
  storybookConfig.output.pathinfo = true;
  storybookConfig.plugins = storybookConfig.plugins.concat(pluginsStorybook);
  return storybookConfig;
};