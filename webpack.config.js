var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
    client: './js/index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, './js')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};
