const express = require('express')

// 创建服务器应用程序，等同于http.createServer()
const app = express()

/**
 * 公开指定目录
 * 通过以下方式便可以直接通过/public/xxx的方式访问public目录中的所有资源
 */
app.use('/public/', express.static('./public/'))

app.get('/', (req, res) => {
  res.end('hello express')
})

app.listen(3000, () => console.log('服务器启动成功'))