import service from '../../src/utils/request'

/**
 * 添加
 */
export function Add(data) {
  return service.request({
    url: '/job/add/',
    method: 'post',
    data,
  })
}

/**
 * 列表
 */
export function GetList(data) {
  return service.request({
    url: data.url,
    method: 'post',
    data,
  })
}

/**
 * 详情
 */
export function Detailed(data) {
  return service.request({
    url: '/job/detailed/',
    method: 'post',
    data,
  })
}

/**
 * 编辑
 */
export function Edit(data) {
  return service.request({
    url: '/job/edit/',
    method: 'post',
    data: data, //请求类型为 post时
    // params: data, //请求类型为 get时
  })
}

/**
 * 禁启用
 */
export function Status(data) {
  return service.request({
    url: '/job/status/',
    method: 'post',
    data,
  })
}
