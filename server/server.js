const ReactDomServer  = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const express = require('express')


let app = express()

// 这里引用的是 webpack 输出的 bundle, 由于 ES6 module 的特性, 这里需要指定 require 的特定变量(default)
let serverEntry = require('../dist/server-entry').default

// 引用 dist/index 文件作为模板.
let template = fs.readFileSync(path.join( __dirname,'../dist/index.html' ), 'utf8')

let port = 8001

console.log(serverEntry)

// 定义对静态资源的响应
app.use('/public',express.static(path.join(__dirname, '../dist')));

app.get("/" , (req, res, next)=>{
  console.log(req.path)

  //使用 ReactDomServer.renderToString 将 react 组件(js代码)转换为静态页面字符串
  let appString = ReactDomServer.renderToString(serverEntry)

  // 使用 静态页面字符替换模板中的占位符
  template = template.replace('<app></app>', appString)
  // console.log(template)

  res.end(template)
})

app.listen(port, ()=>{
  console.log(`server is listening on ${port}`)
})
