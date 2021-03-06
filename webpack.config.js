const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const production = process.env.NODE_ENV === 'production'

module.exports = {
  mode: production ? 'production' : 'development',
  output: { publicPath: '/' },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(scss|css)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin(),
  ],
}
