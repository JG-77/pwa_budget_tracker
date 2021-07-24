const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  mode: 'development',

  // add entry points for JavaScript files for the three pages, home, detail, and favorites.
  entry: './public/index.js',
  output: {
    //the new dist folder that will be created
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
  },
  plugins: [
    // including webpack pwa manifest package
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      //app names and description
      name: 'Budget Tracker App',
      short_name: 'budget App',
      description: 'An application for keeping track of budgeting',
      background_color: '#01579b',
      theme_color: '#ffffff',
      start_url: '/',
      // from icons folder
      icons: [
        {
          src: path.resolve('public/icons/icon-192x192.png'),
          sizes: [192, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
  ],
  // including babel-loader
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
