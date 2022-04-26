const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true
    },
    port: 3006,
    open: true,
    compress: true,
  }
};
