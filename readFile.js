/**
 * 浏览器中的JavaScript是没有文件操作的能力的
 * 但是node中的JavaScript具有操作文件的能力
 */

 // 引入fs即File System这个核心模块
 //1.使用require方法加载fs核心模块
 const fs = require('fs')

//2.读取文件
fs.readFile('./data/testFile1.txt', 
// 'utf-8',
 (error, data) => {
  if (error) throw error
  // 没有指定encoding,返回原始Buffer
  console.log(data) // <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73>
  // 文件中存储的其实都是二进制数据0和1，上述console的结果不是0和1是因为二进制转换成了16进制

  console.log(data.toString())  //用toString转换
})