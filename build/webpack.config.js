const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
// html-webpack-plugin 是一个 webpack plugin, 用于在 build 的时候在指定目录生成一个 HTML 文件

module.exports = {
  // 定义入口文件
  entry:{
    // 使用 path.join 来获得绝对路径
    app: path.join(__dirname, '../client/app.js')
  },
  output:{
    // 定义输出文件名, 这里使用 webpack 变量, [name] 是入口名, 此处对应 app, [hash]是打包完成的文件的哈希值, 用于和浏览器缓存协作.
    filename: '[name].[hash].js' ,

    // bundle 输出位置
    path: path.join(__dirname, '../dist') ,

    // 生产环境下(webpack输出文件), 被引用的静态资源的路径(在使用 webpack-dev-server 时并不生效)
    // publicPath: '/public',
  },
  module:{
    rules:[
      // 定义编译 jsx 文件使用的loader(babel-loader)
      {
        test: /\.jsx$/,
        use:'babel-loader'
      },
      // 定义 js 文件使用的 loader
      {
        test: /\.js$/,
        use:'babel-loader',
        // 排除 node_modules 目录
        exclude:[
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  },
  plugins:[
    new HTMLPlugin()
  ]
}
