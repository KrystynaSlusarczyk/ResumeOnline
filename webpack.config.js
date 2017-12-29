var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  "lodash",
  "react",
  "react-dom",
  "react-redux",
  "react-router",
  "redux"
];

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
    style: './style/scss/style.scss'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            }, {
              loader: "sass-loader",
              options: {
                includePaths: ["style/scss"]
              }
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=image/svg+xml'
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }, {
        test: /\.(jpg|png|jpeg|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000
          }
        }
      }
    ]
  },
  plugins: [
    extractSass,
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new htmlWebpackPlugin({template: 'src/index.html'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: [
        'popper.js', 'default'
      ],
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    })
  ]
};
