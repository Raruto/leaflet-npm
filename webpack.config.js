const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  //mode: 'development',
  plugins: [],
  performance: {
    hints: false,
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'file-loader',
      options: {
        outputPath: 'images',
        context: 'node_modules',
        name: '[path][name].[ext]',
      },
    }, ],
  },
  externals: {
    "leaflet": "L"
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          cache: true,
          parallel: true,
          output: {
            comments: false,
          }
        },
      }),
    ],
  },
};