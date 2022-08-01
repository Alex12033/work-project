const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "/"),

  entry: {
    main: path.resolve(__dirname, "./js/entryWebPack/main.js"),
    burger_menu: path.resolve(__dirname, "./js/entryWebPack/burgerMenu.js"),
    auth_data: path.resolve(__dirname, "./js/entryWebPack/authData.js"),
    footer_input: path.resolve(
      __dirname,
      "./js/entryWebPack/getFooterInput.js"
    ),
    login_form: path.resolve(__dirname, "./js/entryWebPack/loginForm.js"),
    sign_up_form: path.resolve(__dirname, "./js/entryWebPack/signUpForm.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
    compress: true,
    port: 8080,
  },

  devtool: "source-map",

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false, // Включите, чтобы убрать предупреждения о конфликтующем порядке
    }),
    //     new HtmlWebpackPlugin({
    //       template: path.resolve(__dirname, "index.html"),
    //       chunks: ["./js/modules/timer.js"],
    //       scriptLoading: "defer",
    //     }),
    //     new HtmlWebpackPlugin({
    //       template: "./pages/form-registration/login/index.html",
    //     }),
  ],
};
