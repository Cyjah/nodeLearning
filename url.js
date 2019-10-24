const url = require('url')

let obj = url.parse(
  'http://localhost:3000/pinglun?name=%E6%9D%8E%E6%96%87&message=%E4%BD%A0%E5%9C%A8%E8%AF%B4%E4%BB%80%E4%B9%88%E5%95%8A',
  true)
// console.log(obj)
console.log(obj.query)
console.log(obj.query.name)
/**
 * url.parse(xxx)的结果
 *  {
 * protocol: 'http:',
 * slashes: true,
 * auth: null,
 * host: 'localhost:3000',
 * port: '3000',
 * hostname: 'localhost',
 * hash: null,
 * search:
 *  '?name=%E6%9D%8E%E6%96%87&message=%E4%BD%A0%E5%9C%A8%E8%AF%B4%E4%BB%80%E4%B9%88%E5%95%8A',
 * query:
 *  'name=%E6%9D%8E%E6%96%87&message=%E4%BD%A0%E5%9C%A8%E8%AF%B4%E4%BB%80%E4%B9%88%E5%95%8A',
 * pathname: '/pinglun',
 * path:
 *  '/pinglun?name=%E6%9D%8E%E6%96%87&message=%E4%BD%A0%E5%9C%A8%E8%AF%B4%E4%BB%80%E4%B9%88%E5%95%8A',
 * href:
 *  'http://localhost:3000/pinglun?name=%E6%9D%8E%E6%96%87&message=%E4%BD%A0%E5%9C%A8%E8%AF%B4%E4%BB%80%E4%B9%88%E5%95%8A' }

 * url.parse(xxx, true)的结果
 * Url {
 *   protocol: 'http:',
 *   slashes: true,
 *   auth: null,
 *   host: 'localhost:3000',
 *   port: '3000',
 *   hostname: 'localhost',
 *   hash: null,
 *   search:
 *   '?name=%E6%9D%8E%E6%96%87&message=%E4%BD%A0%E5%9C%A8%E8%AF%B4%E4%BB%80%E4%B9%88%E5%95%8A',
 *   query: [Object: null prototype] { name: '李文', message: '你在说什么啊' },
 *   pathname: '/pinglun',
 *   path:
 *   '/pinglun?name=%E6%9D%8E%E6%96%87&message=%E4%BD%A0%E5%9C%A8%E8%AF%B4%E4%BB%80%E4%B9%88%E5%95%8A',
 *   href:
 *   'http://localhost:3000/pinglun?name=%E6%9D%8E%E6%96%87&message=%E4%BD%A0%E5%9C%A8%E8%AF%B4%E4%BB%80%E4%B9%88%E5%95%8A' }
*/