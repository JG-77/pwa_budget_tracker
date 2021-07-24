const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  mode: 'development',

  // add entry points for JavaScript files for the three pages, home, detail, and favorites.
  entry: {
    // app: './public/assets/js/app.js',
    // details: './public/assets/js/detail.js',
    // favorites: './public/assets/js/favorites.js',
  },
  output: {
    path: __dirname + '/public/dist',
    filename: '[name].bundle.js',
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: 'Budget Tracker App',
      short_name: 'budget App',
      description: 'An application for keeping track of budgeting',
      background_color: '#01579b',
      theme_color: '#ffffff',
      start_url: '/',
      icons: [
        {
          src: path.resolve('public/icons/icon-192x192.png'),
          sizes: [192, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
module.exports = config;
