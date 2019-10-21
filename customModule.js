console.log('文件导入开始')
var foo = 'bbbb'
var imp = require('./data/testFile2')
console.log('文件导入结束')
// 在Node中没有全局作用域，只有模块作用域，外部访问不到内部，内部也访问不到外部
console.log(imp.foo)