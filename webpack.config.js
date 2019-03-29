const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'YCWebViewBridge.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'YCWebViewBridge'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.d.ts']
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"PROD"'
    })
  ]
};
