//const webpack = require('webpack');
//const path = require('path');

module.exports = {
  /*configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ],
    resolve : {
      alias: {
        // bind version of jquery-ui
        "jquery-ui": "jquery-ui/jquery-ui.js",      
        // bind to modules;
        modules: path.join(__dirname, "node_modules"),
      }
    }
  },*/

  publicPath: '',
  outputDir: './docs',
  assetsDir: 'assets',
  productionSourceMap: false
}