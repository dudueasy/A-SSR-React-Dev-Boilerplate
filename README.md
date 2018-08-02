# react 项目初始环境
*  使用 npm 初始化项目
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

* 安装了 webpack
  * 添加了 webpack 配置文件 /build/webpack.config.client.js
  * 配置了入口文件, 输出文件, 使用的 loader 和插件

* 安装了 babel
  * 添加了 babel 配置文件 .babelrc
  * 添加了 babel 对 es2015 和 react 的支持 (presets)

# 实现了nodejs服务端渲染
* 创建了应用于服务端的 webpack配置 和 入口文件
* 定义了npm快捷命令, 用于同时编译 服务端bundle 和 客户端bundle
* 创建了 nodejs(express) 服务器
  * 使用了 ReactDOMServer API 来渲染bundle
  * 定义了对静态资源的响应



     

