'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const CompressionPlugin = require("compression-webpack-plugin");

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = 9527 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "后台管理系统",
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    //不打包编辑器
    // plugins: [
    //   new CompressionPlugin({
    //     /* [file]被替换为原始资产文件名。
    //        [path]替换为原始资产的路径。
    //        [dir]替换为原始资产的目录。
    //        [name]被替换为原始资产的文件名。
    //        [ext]替换为原始资产的扩展名。
    //        [query]被查询替换。*/
    //     // filename: '[path].gz[query]',
    //     //压缩算法
    //     algorithm: 'gzip',
    //     //匹配文件
    //     test: /\.js$|\.css$|\.jpg$/,
    //     //压缩超过此大小的文件,以字节为单位
    //     threshold: 5200,
    //     minRatio: 0.8,
    //     //删除原始文件只保留压缩后的文件
    //     deleteOriginalAssets: false
    //   }),
     

    // ],
    
    
  },

}
