const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    static: './dist',
  },
  plugins: [

    new HtmlWebpackPlugin({

      template: './src/index.html',

    }),

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'src/assets/resources/[name].[ext]',
  },
  optimization: {

    runtimeChunk: 'single',

  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        type: 'asset/resource',
      },

    ],

  },
};