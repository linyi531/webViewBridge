import path from 'path'
import webpack from 'webpack'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'YCWebViewBridge.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'src/native_inject'),
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new LodashModuleReplacementPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: true
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"PROD"'
    })
  ]
}
