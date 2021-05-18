const path = require('path');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  stats: 'detailed',
  entry: './server.js',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'server.bundle.js',
  },
  externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore', nodeExternals({
    modulesFromFile: {
      fileName: './package.json',
      includeInBundle: 'dependencies',
      excludeFromBundle: 'devDependencies',
    },
  })],
  plugins: [
    new Dotenv(),
  ],
};
