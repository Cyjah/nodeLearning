const http = require('http')
const fs = require('fs')
const server = http.createServer()

const wwwDir = 'E:/前端项目本地仓库/nodeLearning/www'
server.on('request', function (req, res) {
  
  const url = req.url
  let filePath = '/index.html'
  if (url !== filePath) {
    filePath = url
  }
  fs.readFile(wwwDir + filePath, function (err, data) {
    if (err) {
      return res.end('404 Not Found')
    }
    res.end(data)
  })
})
server.listen(3000, function () {
  console.log('服务器启动成功')
})