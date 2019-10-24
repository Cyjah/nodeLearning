// app application 应用程序
const http = require('http')
const fs = require('fs')
const artTemplate = require('art-template')
const url = require('url')

// 假数据
const comments = [
  {
    name: '张三',
    message: '今天天气很好',
    date: '2019-10-20'
  },
  {
    name: '李四',
    message: '今天天气不好',
    date: '2019-10-21'
  },
  {
    name: '王五',
    message: '今天天气一般般',
    date: '2019-10-22'
  }
]



// 为了方便统一处理静态资源，约定把所有的静态资源都放在public目录中
http.createServer(function (req, res) {
  let parseObj = url.parse(req.url, true)
  let pathName = parseObj.pathname
  console.log(`看看pathName是什么${pathName}`)
  if (pathName === '/') {
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        return res.end('404 Not Found')
      }
      let htmlStr = artTemplate.render(data.toString(), {
        comments: comments
      })
      res.end(htmlStr)
    })
  } else if (pathName === '/post') {
    fs.readFile('./views/post.html', function (err, data) {
      if (err) {
        return res.end('404 Not Found')
      }
      res.end(data)
    })
  } else if (pathName === '/pinglun') {
    const comment = parseObj.query
    comment.date = '2019-10-25 1:31:22'
    comments.push(comment)

    /**
     * 如何通过服务器让客户端重定向？
     *  1.状态码设置成302，临时重定向   statusCode
     *  2.在响应头中通过 location 告诉客户端往哪儿重定向   setHeader
     * 如果客户端发现收到服务器的响应状态码是 302，就会自动去响应头中找location,然后对该地址发起新的请求
     */
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()

  } else if (pathName.indexOf('/public/') === 0) {
    /**
      * 如果请求路径是以public开头，则我认为你要获取public中某个资源
      * 所以我们就可以把请求路径当作文件路径来直接进行读取
    */
    // console.log(url)
    fs.readFile('.' + pathName, function (err, data) {
      if (err) {
        return res.end('404 Not Found')
      }
      res.end(data)
    })    
  } else {
    fs.readFile('./views/_404Page.html', function (err, data) {
      if (err) {
        res.end('404 Not Found')
      }
      res.end(data)
    })
  }
}).listen(3000, function () {
  console.log('The server is running !')
})