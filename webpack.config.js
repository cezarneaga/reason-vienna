module.exports = {
  entry: './lib/js/src/index.js',
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    overlay: {
      warnings: true,
      errors: true
    },
    stats: 'errors-only'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }
}
