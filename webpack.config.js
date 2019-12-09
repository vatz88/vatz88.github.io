const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getWebpackConfig(env) {
  const isProdcution = env === 'production' ? true : false;

  const cssLoaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: !isProdcution,
      },
    },
    {
      loader: 'css-loader',
      options: { importLoaders: 1 },
    },
    'postcss-loader',
    'sass-loader',
  ].filter(Boolean);

  return {
    mode: isProdcution ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, '.'),
    },
    devtool: isProdcution ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: './',
    },
    module: {
      rules: [
        {
          test: /\.(svelte)$/,
          exclude: /node_modules/,
          use: 'svelte-loader',
        },
        {
          test: /\.(css|scss|sass)$/,
          use: cssLoaders,
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name() {
              if (isProdcution) {
                return '[contenthash].[ext]';
              }
              return '[path][name].[ext]';
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        // dry: true,
        cleanOnceBeforeBuildPatterns: [
          'index.html',
          'main.*.js',
          'main.*.js.map',
        ],
      }),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/template.html'),
      }),
    ],
  };
}

module.exports = getWebpackConfig(process.env.NODE_ENV);
