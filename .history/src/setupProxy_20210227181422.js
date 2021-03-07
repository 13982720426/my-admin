const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use('/manage', {
    target: 'http://admintest.happymmall.com', //配置要请求的服务器地址
    changeOrigin: true,
  })
}
