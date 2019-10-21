const fs = require('fs')
const data = new Uint8Array(Buffer.from('尝试fs.writeFile操作'))
fs.writeFile('./data/testFile1.txt', data, (error) => {
  if (error) throw error
  console.log('文件写入成功')
})
fs.readFile('./data/testFile1.txt', 'utf-8', (error, data) => {
  if (error) throw error
  console.log(data)
})