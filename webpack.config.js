const path = require('path')
const webpack = require('webpack')
// import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'


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



// export default {
//   entry: './src/index.ts',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'YCWebViewBridge.js',
//     libraryTarget: 'umd',
//     libraryExport: 'default',
//     library: 'YCWebViewBridge'
//   },
//   module: {
//     rules: [{
//       test: /\.tsx$/,
//       include: [
//         path.resolve(__dirname, 'src')
//       ],
//       exclude: [
//         path.resolve(__dirname, 'src/native_inject'),
//         path.resolve(__dirname, 'node_modules')
//       ],
//     }]
//   },
//   resolve: {
//     extensions: ['.js', '.json']
//   },
//   devtool: 'source-map',
//   target: 'web',
//   plugins: [
//     new LodashModuleReplacementPlugin(),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//         drop_console: true
//       }
//     }),
    
//   ]
// }
