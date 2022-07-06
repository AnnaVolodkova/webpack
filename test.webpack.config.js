const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index',
    analytics: './src/analytics',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].[name].js',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single'
  },
  // devtool: 'source-map',
  devServer: {
    port: 8080,
    hot: true,
  },
  module: {
    rules: [ // loaders
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|ttf)$/,
        type: 'asset/resource',
        // use: ['file-loader'], Webpack 4
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash].[name].css',
    }),
    new CssMinimizerPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
};
