import service from '../../src/utils/request'

/**
 * 登录接口
 */
export function Login(data) {
  return service.request({
    url: '/login/',
    method: 'post',
    data: data, //请求类型为 post时
    // params: data, //请求类型为 get时
  })
}