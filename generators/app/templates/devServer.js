/* eslint no-console:0 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack/client');
const runServer = require('./dist/server').runServer;

const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const compiler = webpack(config);
const dashboard = new Dashboard();
compiler.apply(new DashboardPlugin(dashboard.setData));


new WebpackDevServer(compiler, config.devServer)
  .listen(config.devServer.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('==> ✅  Static file@localhost:' + config.devServer.port);
    runServer();
  });

