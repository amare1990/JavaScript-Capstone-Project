const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: path.join(_dirname, "app"),
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
    resolve: {
      extensions: ["", ".js", ".jsx", ".css"],
    },
  },
};
