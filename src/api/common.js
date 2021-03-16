import service from '../utils/request'

/**
 * 获取部门列表
 */
export function TableList(params) {
  return service.request({
    url: params.url,
    method: params.method || 'post',
    data: params.data, //请求类型为 post时
    // params: data, //请求类型为 get时
  })
}
