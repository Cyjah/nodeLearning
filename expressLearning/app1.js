const express = require('express')

const app = express()

// 当以/public/开头的时候，去./public/ 目录中查找对应的资源, url必须以/public/开头
app.use('/public/', express.static('./public/'))

/**
 * 下面这种方式可以直接访问public下的资源，如/login.html
 * app.use(express.static('./public'))
 */

app.get('/', (req, res) => {
  res.end('hello world')
})

app.get('/login', (req, res) => {
  res.end('this is login page')
})

app.listen(3000, () => {
  console.log('服务器启动成功')
})