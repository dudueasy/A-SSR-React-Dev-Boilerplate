const path = require('path')

module.exports = {
  // 定义构建目标为 nodejs 环境
  target: 'node',
  // 定义入口文件
  entry:{
    // 使用 path.join 来获得绝对路径
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output:{
    filename: 'server-entry.js' ,

    // bundle 输出位置
    path: path.join(__dirname, '../dist') ,

    // 定义生产环境下(webpack输出文件), 页面中的静态资源的路径前缀(在开发环境并不生效)
    // 这个设置对于 服务端渲染 很重要
    publicPath: '/public',

    // bundle 中的模块引用使用 commonjs 规范来处理 (适用于 nodejs 环境)
    libraryTarget: "commonjs2"
  },
  module:{
    rules:[
      // 定义编译 jsx 文件使用的loader(转换 jsx 代码)
      {
        test: /\.jsx$/,
        use:'babel-loader'
      },
      // 定义 js 文件使用的 loader (转换 es6 代码)
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
}
