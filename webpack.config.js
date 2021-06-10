const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin= require('copy-webpack-plugin')

module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',
  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // 읽은 css 파일을 html 파일에 적용을 해준다.
          'style-loader', 
          // css 파일을 읽을 수 없는 자바스크립트에게 읽을 수 있게 해준다.
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ]
}