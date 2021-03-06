const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const polyfills = [
  'core-js/fn/array/from',
  'core-js/fn/array/for-each'
];

module.exports = {
  entry: [
    ...polyfills,
    './assets/scripts/main.js',
    './assets/scss/main.scss'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css'
    }),
    new CopyWebpackPlugin([
      {
        from: './assets/fonts',
        to: '../fonts'
      },
      {
        from: './assets/favicons',
        to: '../favicons'
      },
      {
        from: './assets/svg',
        to: '../svg'
      },
      {
        from: './assets/images',
        to: '../images'
      }
    ])
  ]
};
