const path = require( 'path' );

module.exports = {
  mode: 'production',
  entry: './src/Grid.tsx',
  output: {
    path: path.resolve('lib'),
    filename: 'Grid.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      }
    ]
  }
}