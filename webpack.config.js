const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/js/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 5001, // default 8080,
    open: true,
    hot: true,
    watchContentBase: true,
  },
  //loaders
  module: {
    rules: [
      //css
      //{ test: /\.css$/, use: ['style-loader', 'css-loader'] },

      //scss
      {
        test: /\.(css|scss)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader', // 1. Turns sass into css
        ],
      },

      //images
      {
        test: /\.(svg|ico|png|webp|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/',
            },
          },
        ],
        type: 'asset/resource',
      },

      //js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Trading Pit',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/dashboard.html'),
    }),
  ],
};
