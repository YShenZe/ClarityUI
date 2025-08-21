const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/clarityui.styl",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "ignore.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "stylus-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "clarityui.min.css",
    }),
  ],
  optimization: {
    minimizer: [
      `...`, // 保留默认压缩（如 Terser）
      new CssMinimizerPlugin(),
    ],
  },
};