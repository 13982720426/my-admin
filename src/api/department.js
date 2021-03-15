import service from '../utils/request'

/**
 * 添加部门接口
 */
export function DepartmentAddApi(data) {
  return service.request({
    url: '/department/add/',
    method: 'post',
    data: data, //请求类型为 post时
    // params: data, //请求类型为 get时
  })
}
/**
 * 获取部门列表接口
 */
export function GetList(data) {
  return service.request({
    url: '/department/list/',
    method: 'post',
    data: data, //请求类型为 post时
    // params: data, //请求类型为 get时
  })
}
/**
 * 删除接口
 */
export function Delete(data) {
  return service.request({
    url: '/department/delete/',
    method: 'post',
    data: data, //请求类型为 post时
    // params: data, //请求类型为 get时
  })
}
