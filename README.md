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

*  安装了 webpack
    * 添加了 webpack 配置文件 /build/webpack.config.js
    * 配置了入口文件, 输出文件, 使用的 loader 和插件


*  安装了 babel
    * 添加了 babel 配置文件 .babelrc
    * 添加了babel 对 es2015 和 react 的支持 (presets)
