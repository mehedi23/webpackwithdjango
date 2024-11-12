const path = require('path');

module.exports = {
  entry: './assets/js/index.js', // Adjust to your React entry file path
  output: {
    path: path.resolve(__dirname, 'static/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Include .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Include React preset
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .jsx extensions
  },
  mode: 'development', // Or 'production'
};
