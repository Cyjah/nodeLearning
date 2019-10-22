const fs = require('fs')
fs.readdir('E:/前端项目本地仓库/nodeLearning/www', function (err, files) {
  if (err) throw err
  console.log(files)
})