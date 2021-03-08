/**
 * 数据接口
 */
export function infoDetailed(data) {
  return service.request({
    url: '/login/',
    method: 'post',
    data: data, //请求类型为 post时
    // params: data, //请求类型为 get时
  })
}

/**
 * 列表接口
 */
export function infoList(data) {
  return service.request({
    url: '/login/',
    method: 'post',
    data: data, //请求类型为 post时
    // params: data, //请求类型为 get时
  })
}
