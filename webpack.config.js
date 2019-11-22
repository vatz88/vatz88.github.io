const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function(env) {
  const isProdcution = env === 'production' ? true : false;

  return {
    mode: isProdcution ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/app.svelte'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, '.'),
    },
    module: {
      rules: [
        {
          test: /\.(svelte)$/,
          exclude: /node_modules/,
          use: 'svelte-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        dry: true,
        cleanOnceBeforeBuildPatterns: ['index.html', 'main.*.js'],
        // cleanOnceBeforeBuildPatterns: ['!src', '!package*', '!node_modules', '!webpack*'],
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/template.html'),
      }),
    ],
  };
};
