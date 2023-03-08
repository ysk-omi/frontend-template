const path = require('path');
const srcDir = path.join(__dirname, '/src');
const distDir = path.join(__dirname, '/dist');

module.exports = {
  mode: process.env.WEBPACK_ENV,
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  entry: {
    index: [`${srcDir}/js/index.js`]
  },
  output: {
    path: `${distDir}/assets/js/`,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      /**
       * JavaScript Settings
       */
      {
        test: /\.js$/,
        use: [
          {
            loader: 'source-map-loader'
          }
        ],
        enforce: 'pre'
      },
      {
        test: /\.(frag|vert|glsl)$/,
        use: {
          loader: 'webpack-glsl-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100 * 1024,
              name: './img/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};
