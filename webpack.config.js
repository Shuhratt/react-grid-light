const path = require('path');

module.exports = {
  context: path.join(__dirname),
  mode: 'production',
  entry: {
    Grid: ['./src/Grid.tsx'],
    Row: ['./src/Row.tsx'],
    Column: ['./src/Column.tsx'],
  },
  output: {
    path: path.resolve('lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
};
