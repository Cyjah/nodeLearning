const http = require('http')
// 1.创建server
const server = http.createServer()

const products = [
  {
    name: '小米',
    price: 888
  },
  {
    name: '华为',
    price: 999
  }
]
// 2.监听request请求事件，设置请求处理函数
server.on('request', function(req, res) {
  console.log(`收到客户端请求了，请求路径是：${req.url}`)
  /**
   * res.write('***')
   * res.end()
   * 上面这种方式繁琐，不推荐，用res.end()
   */
  // res.end('Hello Node.js')
  const url = req.url
  if (url === '/') {
    res.end('index page')
  } else if (url === '/products') {
  
    // res发送的数据只能是字符串或者是二进制数据
    res.end(JSON.stringify(products))
  }
})
// 3.绑定端口号，启动服务
server.listen(3000, function() {
  console.log('服务器启动成功')
})
/**
 * ip地址用来定位计算机
 * 端口号用来定位具体的应用程序
 * 所有需要联网的应用都需要占用一个端口号
 */