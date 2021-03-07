// const proxy = require('http-proxy-middleware')

// module.exports = function (app) {
//   app.use(
//     proxy('/devApi', {
//       target: 'http://www.web-jshtml.cn/api/react', //配置要请求的服务器地址
//       changeOrigin: true,
//     })
//   )
//   //   app.use(
//   //     proxy('/manage/api', {
//   //       target: 'http://admintest.happymmall.com:7000',
//   //       changeOrigin: true,
//   //     })
//   //   )
// }

const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/devApi', {
      target: 'http://www.web-jshtml.cn/api/react', //配置要请求的服务器地址
      changeOrigin: true,
    })
  )
}
