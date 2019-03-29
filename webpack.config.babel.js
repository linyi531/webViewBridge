import path from 'path'
import webpack from 'webpack'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'

export default {
  mode: 'production',
  entry: './src/index.ts',
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
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'src/native_inject'),
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'ts-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  devtool: 'source-map',
  target: 'web',
  optimization: {
    minimize: true
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"PROD"'
    })
  ]
}
