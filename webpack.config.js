const crypto = require('crypto');
const path = require('path');

// Webpack 4 / terser-webpack-plugin still request MD4, which OpenSSL 3
// (Node 17+) rejects. SHA-256 is a compatible stand-in for cache keys.
const createHash = crypto.createHash;
crypto.createHash = algorithm =>
  createHash(algorithm === 'md4' ? 'sha256' : algorithm);

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const SizePlugin = require('size-plugin');

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
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass'),
        sassOptions: {
          silenceDeprecations: ['legacy-js-api', 'import'],
        },
      },
    },
  ].filter(Boolean);

  return {
    mode: isProdcution ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      filename: isProdcution ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(__dirname, './dist'),
    },
    devtool: isProdcution ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
    },
    optimization: {
      minimizer: [new TerserJSPlugin({})],
    },
    module: {
      rules: [
        {
          test: /\.(svelte|m?js)$/,
          // not excluding node_modules to support old safari version
          // excluding node_modules, adds use of `const` in production code
          // exclude: /node_modules/,
          // include: /node_modules\/svelte/,
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
      // isProdcution &&
      //   new CleanWebpackPlugin({
      //     // dry: true,
      //     cleanOnceBeforeBuildPatterns: [
      //       'index.html',
      //       'main.*.css',
      //       'main.*.css.map',
      //       'main.*.js',
      //       'main.*.js.map',
      //     ],
      //   }),
      new MiniCssExtractPlugin({
        filename: isProdcution ? '[name].[contenthash].css' : '[name].css',
        chunkFilename: isProdcution
          ? '[name].[contenthash].chunk.css'
          : '[name].chunk.css',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/index.html'),
      }),
      // isProdcution &&
      //   new SizePlugin({
      //     pattern: 'main.*.{js,css}',
      //   }),
    ].filter(Boolean),
  };
}

module.exports = getWebpackConfig(process.env.NODE_ENV);
