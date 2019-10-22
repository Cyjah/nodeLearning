const http = require('http')
const server = http.createServer()
const fs = require('fs')

server.on('request', function (req, res) {
  const url = req.url
  if (url === '/') {
    // 读取template.html文件
    fs.readFile('./resource/template.html', function (err, data) {
      if (err) {
        return res.end('404, PAGE NOT FOUND')
      }

      // 读取www目录下的文件
      fs.readdir('E:/前端项目本地仓库/nodeLearning/www', function (err, files) {
        if (err) {
          res.end('读取的目录路径错误')
        }

        // 定义一个字符串变量content
        let content = ''
        files.forEach(function (item) {
          // 将每一次循环的结果与content拼接
          content += `
            <tr>
              <td>${item}</td>
              <td></td>
            </tr>
          `
        })

        // 此时data是二进制格式数据，要用toString将它转为字符串格式
        let data1 = data.toString()

        // 将content用replace替换到template.html中预留的aaa标记处
        let newData = data1.replace('aaa', content)
        res.end(newData)
      })
    })
  }
})
server.listen(3000, function () {
  console.log('服务器启动成功')
})