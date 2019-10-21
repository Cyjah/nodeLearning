const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', function (req, res) {
  const url = req.url
  /**
   * 不同资源对应的Content-Type是不一样的
   * 图片不需要指定编码
   * 一般只为字符数据指定编码
   */
  if (url === '/') {
    fs.readFile('./resource/index.html', function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('请求错误，资源不存在')
      } else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data)
      }
      })
  } else if (url === '/dog') {
    fs.readFile('./resource/dog.jpg', function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('请求错误,资源不存在')
      } else {
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  }
})
server.listen(3000, function () {
  console.log('服务器启动成功')
})