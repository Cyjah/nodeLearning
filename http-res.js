const http = require('http')
const server = http.createServer()
server.on('request', function(request, response) {
  console.log(`收到客户端请求了，请求路径是:${request.url}`)
  // 给客户端发送响应数据，response.write可以使用多次，但是最后一定要使用response.end()结束
  // response.write('hello ')
  // response.write('node.js')
  // 告诉客户端，数据传送完毕，可以呈现给客户端
  // response.end()
  /**
   * 请求不同路径响应不同的结果
   * /index
   * /login  登录
   * /register 注册
   */
  if (request.url === '/index') {
    response.write('this is index', 'utf-8')
    response.end()
  } else if (request.url === '/login') {
    response.write('this is login', 'utf-8')
    response.end()
  } else if (request.url === '/register') {
    response.write('this is register', 'utf-8')
    response.end()
  }
})

server.listen(3000, function() {
  console.log('服务器启动成功了，可以通过169.254.175.173:3000/来访问了')
})