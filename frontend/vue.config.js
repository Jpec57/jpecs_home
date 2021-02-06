const fs = require('fs');
// const path = require('path')

// var webpack = require('webpack');

// var utils = require('./services/utils');

// const files = await utils.getFiles(__dirname + "./src/assets/articles/");
// console.log(files);
const someFileContents = fs.readFileSync('./src/assets/articles/flutter_intro.md');
module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
      config.module
        .rule('raw')
        .test(/\.md$/)
        .use('raw-loader')
        .loader('raw-loader')
        .end()
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
    }
    // configureWebpack: config => {
    //     return {
    //       plugins: [
    //         new webpack.DefinePlugin({
    //           'flutter': someFileContents,
    //         })
    //       ]
    //     }
    //   },
  }