const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SizePlugin = require('size-plugin');

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
      filename: isProdcution ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(__dirname, '.'),
    },
    devtool: isProdcution ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: './',
    },
    optimization: {
      minimizer: [new TerserJSPlugin({})],
    },
    module: {
      rules: [
        {
          test: /\.(svelte|m?js)$/,
          exclude: /node_modules/,
          include: /node_modules\/svelte/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread'],
            },
          },
        },
        {
          test: /\.(svelte)$/,
          exclude: /node_modules/,
          use: {
            loader: 'svelte-loader',
            options: {
              emitCss: true,
            },
          },
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
      isProdcution &&
        new CleanWebpackPlugin({
          // dry: true,
          cleanOnceBeforeBuildPatterns: [
            'index.html',
            'main.*.css',
            'main.*.css.map',
            'main.*.js',
            'main.*.js.map',
          ],
        }),
      new MiniCssExtractPlugin({
        filename: isProdcution ? '[name].[contenthash].css' : '[name].css',
        chunkFilename: isProdcution
          ? '[name].[contenthash].chunk.css'
          : '[name].chunk.css',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/template.html'),
      }),
      isProdcution &&
        new SizePlugin({
          pattern: 'main.*.{js,css}',
        }),
    ].filter(Boolean),
  };
}

module.exports = getWebpackConfig(process.env.NODE_ENV);
