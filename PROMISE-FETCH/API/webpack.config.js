const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
/////////////////////////////
/////////////////////////////
module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: "./js/app.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",

    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.js$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    open: true,
    compress: true,
    hot: true,
    static: path.join(__dirname, "./dist"),
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
