const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");
const corejs = require("core-js");
const fse = require("fs-extra");

/*
  Because I didn't bother making CSS part of our
  webpack workflow for this project I'm just
  manually copying our CSS file to the DIST folder. 
*/
class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy files", function () {
      fse.copySync("./app/images", "./docs/images");
      fse.copySync("./app/_redirects", "./docs/_redirects");

      /*
        If you needed to copy another file or folder
        such as your "images" folder, you could just
        call fse.copySync() as many times as you need
        to here to cover all of your files/folders.
      */
    });
  }
}

const config = {
  entry: "./app/Main.js",
  output: {
    publicPath: "",
    filename: "myBundle.[hash].js",
    path: path.resolve(__dirname, "docs"),
  },
  mode: "development",
  devtool: "eval-cheap-source-map",
  plugins: [
    new Dotenv({ systemvars: true }),
    new HtmlWebPackPlugin({
      filename: "index.html",
      template: "./app/index.html",
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  // devServer: {
  //   port: 8080,
  //   contentBase: path.resolve(__dirname, "docs"),
  //   hot: true,
  //   historyApiFallback: { index: "index.html" },
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", { targets: { node: "12" } }],
            ],
          },
        },
      },
    ],
  },
};

if (currentTask == "webpackDev" || currentTask == "dev") {
  config.devtool = "source-map";
  config.devServer = {
    port: 3006,
    host: "0.0.0.0",
    contentBase: path.join(__dirname, "docs"),
    hot: true,
    historyApiFallback: { index: "index.html" },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  };
}

if (currentTask == "build") {
  config.mode = "production";
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: "main.[hash].css" }),
    new RunAfterCompile(),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
  );
}
module.exports = config;
