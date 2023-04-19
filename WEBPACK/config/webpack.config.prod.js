const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
/////////////////////////////
/////////////////////////////
module.exports = {
  devtool: "source-map",
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "js/[name].[contenthash]-bundle.js",
    path: path.resolve(__dirname, "../", "build"),
    assetModuleFilename: "./images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },

      {
        test: /\.(sass|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.js$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
          plugins: [],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Nowa aplikacja",
      template: "src/templates/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash].css",
    }),
    // new CopyPlugin({
    //   from: "public/images",
    //   to: "images",
    // }),
  ],
};
