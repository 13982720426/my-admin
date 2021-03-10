const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    //配置本地环境变量 地址从.env.development 中获取
    proxy([process.env.REACT_APP_API], {
      target: process.env.REACT_APP_BASE_URL, //配置要请求的服务器地址
      changeOrigin: true,
      pathRewrite: {
        [`^${process.env.REACT_APP_API}`]: '',
      },
    })
  )
  //   app.use(
  //     proxy('/manage/api', {
  //       target: 'http://admintest.happymmall.com:7000',
  //       changeOrigin: true,
  //     })
  //   )
}
// /devApi/login/
/**
 * 1.匹配到devApi，开始做代理 http://www.web-jshtml.cn/api/react
 * 2./devApi/login/ => /login/
 * 3.替换之后的地址: http://www.web-jshtml.cn/api/react/login
 *


 */

// const { createProxyMiddleware } = require('http-proxy-middleware')
// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware('/devApi', {
//       target: 'http://www.web-jshtml.cn/api/react', //配置要请求的服务器地址
//       changeOrigin: true,
//       pathRewrite: {
//         '^/devApi': '',
//       },
//     })
//   )
// }
