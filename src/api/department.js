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
