const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
/////////////////////////////
/////////////////////////////
module.exports = {
  devtool: "source-map",
  mode: "development", // wersja developerska lub produkcyjna
  entry: {
    main: "./src/index.js",
  }, // pun1kt wejścia -->  'ŚCIEŻKA-DO MODUŁU,KTÓRY CHCEMY DAĆ NA PRODUKCJĘ'
  // DOMYŚLNIE JEST POWYŻSZA ŚCIEŻKA
  output: {
    // na podstawie właściwości output bundler wie gdzie umieścić docelowe pliki --> domyślnie jest to './dist/main.js'
    filename: "js/[name]-bundle.js",
    path: path.resolve(__dirname, "../", "build"),
    assetModuleFilename: "images/[name][ext]",
  },
  // przekazujemy obiekt, który ma reguły
  module: {
    rules: [
      {
        test: /\.txt$/, // WYRAŻENIE REGULARNE --> DLA WSZYSTKICH PLIKÓW Z .TXT ZASTOSUJ LOADER
        use: "raw-loader",
      },
      {
        test: /\.css$/, // WYRAŻENIE REGULARNE --> DLA WSZYSTKICH PLIKÓW Z .css ZASTOSUJ LOADER
        use: ["style-loader", "css-loader"], // pierwszy będzie css loader
      },
      {
        test: /\.(sass|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.js$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            // "@babel/preset-react" //w przypadku użycia biblioteki react
          ],
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
  ],
  devServer: {
    open: true, // otworzenie strony zaraz po bundlingu
    static: {
      directory: path.resolve(__dirname, "../", "public"),
    }, //wskazuyjemy miejsce zaasobów statycznych
    port: 2137,
  },
};
