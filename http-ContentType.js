const http = require('http')
const server = http.createServer()
server.on('request', function (req, res) {
  const url = req.url
  if (url === '/plain') {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('hello 世界')
  } else if (url === '/html') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<p> Hello World <a href="">点我</a></p>')
  }
})
server.listen(3000, function () {
  console.log('服务器启动成功')
})