const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});
const nodeExternals = require('webpack-node-externals');

module.exports = {
  stats: 'detailed',
  entry: './server.js',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'server.bundle.js'
  },
  externals: nodeExternals(),
  plugins: [
      new webpack.DefinePlugin( {
          "process.env" : JSON.stringify(dotenv.parsed)
      }),
  ],
};