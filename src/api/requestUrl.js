const requestUrl = {
  //Table API
  departmentList: '/department/list/', //列表 带分页
  getDepartmentList: '/department/departmentList/', //列表 不带分页
  departmentListDelete: '/department/delete/',

  //Form API
  departmentAdd: '/department/add/',
  departmentEdit: '/department/edit/',

  // job
  jobList: '/job/list/', // 列表
  jobListAll: '/job/listAll/', // 列表
  jobAdd: '/job/add/', // 添加
  jobEdit: '/job/edit/',
  jobListDelete: '/job/delete/', // 职位删除
}

export default requestUrl
