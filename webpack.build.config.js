const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge.smart(
  baseConfig,
  {
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    }
  }
);