# 项目介绍
* 这是一个初始化的 webpack-react 工程化项目环境, 实现了:
  * webpack devServer热模块加载
  * 服务端渲染
  * 开发时服务端热模块加载
  * 应用了 eslint airbnb 代码规范, webpack编译前检查, git提交前检查
  * 以及其他的工程架构优化.

# stage1 npm 初始化项目
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

# stage2 安装和配置了 webpack
* 添加了 webpack 配置文件 /build/webpack.config.client.js
* 配置了入口文件, 输出文件, 使用的 loader 和插件

# stage3 安装和配置了 babel
* 添加了 babel 配置文件 .babelrc
* 添加了 babel 对 es2015 和 react 的支持 (presets)

# stage4 实现了 nodejs 服务端渲染
* 创建了应用于服务端的 webpack 配置文件 /build/webpack.config.erver.js 和 入口文件 /server/server.js
* 定义了npm快捷命令, 用于同时编译 服务端bundle 和 客户端bundle
* 创建了 nodejs(express) 服务器
  * 使用了 ReactDOMServer API 来渲染bundle
  * 定义了对静态资源的响应

# stage5 实现了 webpack devServer 热模块更新
* 在.babelrc中添加了 plugin react-hot-loader/babel
* 更新了webpack开发环境下 devServer 的配置
* 在入口文件中应用了 react-hot-loade@3 API

# stage6 实现了开发时服务端渲染 + 热更新
* 更新了开发环境下 nodejs 服务器的代码
  * 获取devServer内存中的模板文件
    * nodejs服务器通过 axios 向 webpack devServer 发起http请求来获得 webpack devServer 生成的模板文件
  * 在内存中生成模块
    * 调用 webpack nodejs API 和 memory-fs 在内存中实时地生成 bundle
    * 使用 module.constructor API 实时地根据 bundle 中的数据来生成模块
  * 定义对HTML的响应
    * 使用服务端渲染的 bundle 来替换模板中的React组件占位符
  * 定义对静态资源的响应
    * 使用 http-proxy-middleware 中间件, 让 devServer 来代理静态资源的处理

# stage7 代码规范化配置
* 应用 eslint airbnb 规范
* 配置了 editorconfig 编辑器规则
* 配置了 webpack 编译前的代码检测
  * 通过在 webpack rules 中应用 eslint-loader 来实现 js/jsx 代码的检查
* 配置了 git 提交前的代码检查
  * 通过在 npm 包 husky 实现git提交前检查

# stage8 工程架构优化
* 通过 webpack-merge 应用服务端和客户端共有配置
  * 创建了共有配置文件 webpack.config.base.js
* 服务端应用 serve-favicon 中间件来响应favicon.ico
* 服务端代码变更后自动重启服务器
  * 使用 nodemon 和配置文件 nodemon.json 实现自动重启nodejs服务器.
