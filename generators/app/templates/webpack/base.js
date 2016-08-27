const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const styleLintPlugin = require('stylelint-webpack-plugin');

const srcPath = path.join(__dirname, '/../src');
const modulesPath = path.join(__dirname, '/../node_modules');

const plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.ProvidePlugin({
    'Promise': 'bluebird',
  }),
  new ExtractTextPlugin('[name].css', { allChunks: true }),
  new styleLintPlugin({
    configFile: path.join(__dirname, '../.stylelintrc'),
    files: '../src/**/*.css',
  }),
];

if (process.env.NODE_ENV === 'development') {
  const DashboardPlugin = require('webpack-dashboard/plugin');
  plugins.push(new DashboardPlugin());
}

module.exports = {
  cache: false,
  context: __dirname,
  debug: false,
  quiet: false,
  noInfo: false,
  stats: {
    colors: true,
    reasons: true,
    hash: true,
    version: true,
    timings: true,
    chunks: true,
    chunkModules: true,
    cached: true,
    cachedAssets: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'src',
      'node_modules',
    ],
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      include: srcPath,
      loader: 'eslint-loader',
    }],
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'isomorphic-style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
          { publicPath: '../assets/' }
        ),
        include: srcPath,
        exclude: modulesPath,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('isomorphic-style-loader', 'css-loader!postcss-loader'),
        include: modulesPath,
        exclude: srcPath,
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
  plugins,
  postcss: () => {
    return [
      require('autoprefixer')({
        browsers: ['last 2 versions', 'ie >= 8'],
      }),
    ];
  },
  node: {
    process: true,
    __dirname: true,
  },
};

