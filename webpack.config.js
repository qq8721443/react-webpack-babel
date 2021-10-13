const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');

module.exports = (env) => {
  dotenv.config({
    path: `./.env`,
  });

  console.log(process.env.MODE);
  console.log(`경로 : ${__dirname}`);

  return {
    mode: `${process.env.MODE}`,
    entry: './src/index.js',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].bundle.js',
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
    },
    devtool: 'inline-source-map',
    devServer:
      process.env.MODE === 'development'
        ? {
            https: false,
            host: 'localhost',
            compress: true,
            hot: true,
            port: 3000,
            open: true,
            client: {
              progress: true,
            },
            historyApiFallback: true,
          }
        : undefined,
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './public/index.html' }),
      new CleanWebpackPlugin(),
    ],
  };
};
