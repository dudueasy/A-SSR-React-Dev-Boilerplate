# react 项目初始环境
* stage1 使用 npm 初始化项目
  * 安装了以下 npm 包
```
"dependencies": {
  "webpack": "^3.9.1",
    "webpack-dev-server": "^2.9.5",
    "react": "^16.2.0",
    "react-dom": "^16.2.0"
},
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "html-webpack-plugin": "^3.2.0"
  }
```

* stage2 安装了 webpack
  * 添加了 webpack 配置文件 /build/webpack.config.client.js
  * 配置了入口文件, 输出文件, 使用的 loader 和插件

* stage3 安装了 babel
  * 添加了 babel 配置文件 .babelrc
  * 添加了 babel 对 es2015 和 react 的支持 (presets)

# stage4 实现了nodejs服务端渲染
* 创建了应用于服务端的 webpack配置 和 入口文件
* 定义了npm快捷命令, 用于同时编译 服务端bundle 和 客户端bundle
* 创建了 nodejs(express) 服务器
  * 使用了 ReactDOMServer API 来渲染bundle
  * 定义了对静态资源的响应

# stage5 实现了webpack devServer热模块更新
* 在babelrc中添加了 plugin ```react-hot-loader/babel```
* 更新了webpack开发环境下 devServer 的配置
* 在入口文件中应用了 react-hot-loade@3 API

# stage6 实现了开发时服务端渲染 + 热更新
* 更新了开发环境下 nodejs 服务器的代码
  * 获取devServer内存中的模板文件
    * nodejs服务器通过 axios 向 webpack devServer 发起http请求来获得webpack devServer生成的模板文件
  * 在内存中生成模块
    * 调用 webpack nodejs API 和 memory-fs 在内存中实时地生成 bundle
    * 使用 module.constructor API 实时地根据 bundle 中的数据来生成模块
  * 定义对HTML的响应
    * 使用服务端渲染的 bundle 来替换模板中的React组件占位符
  * 定义对静态资源的响应
    * 使用 http-proxy-middleware 中间件, 让 devServer 来代理静态资源的处理


