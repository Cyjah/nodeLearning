// app application 应用程序
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use('/public', express.static('./public/'))

// 配置body-parser中间件，用来解析表单POST请求体
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

/**
 * 配置使用art-template模板引擎
 * 第一个参数表示，当渲染以 .html结尾的文件的时候，使用art-template模板引擎
 * express-art-template是专门用来在express中把art-template整合到express中
 */
app.engine('html', require('express-art-template'))

/**
 * express为response响应对象提供了一个方法：render
 * render需要配置了模板引擎才可以使用
 * res.render('html模板名', {模板数据})
 * 第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
 * 也就是说express有一个约定，开发人员把所有的视图文件都放到views目录中
 * 如果想要修改默认的views目录，则可以 app.set('views', render函数的默认路径)
 */
app.get('/', (req, res) => {
  res.render('index.html', {
    comments: comments
  })
})

app.get('/post', (req, res) => {
  res.render('post.html')
})

/**
 * 在express中没有内置获取表单POST请求体的API，这里我们需要使用一个第三方包 body-parser 
 */
app.post('/post', (req, res) => {
  let comment = req.body
  comment.date = '2019-10-31'
  comments.unshift(comment)
  res.redirect('/')
})



app.listen(3000, () => {
  console.log('服务器启动成功')
})