const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/')
  },
}

module: {
  rules: [
    {
    test: /\.js$/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }]
    }
  ]
}

