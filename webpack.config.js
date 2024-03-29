const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.tsx', './src/styles/app.scss'],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/dist/'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      images: path.resolve(__dirname, 'src/images/'),
      interfaces: path.resolve(__dirname, 'src/interfaces/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      utilities: path.resolve(__dirname, 'src/utilities/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'bundle.css',
        },
        use: ['sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devServer: {
    port: 8080,
    hot: true,
    open: true,
    client: {
      overlay: true,
    },
  },
};
