const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: { directory: path.join(__dirname, 'public') },
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.jpg$/.test(entry)) return 'image';
        if (/\.css$/.test(entry)) return 'style';
        return 'script';
      },
      include: ['bundle.js', 'hero-bg.jpg'],
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      },
      {
        // Handle images and PDFs as static resources
        test: /\.(png|jpe?g|gif|svg|pdf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      buffer: require.resolve('buffer/')
    }
  },
};
