const router = [
  {
    title: '控制台',
    icon: 'index',
    key: '/index',
  },
  {
    title: '用户管理',
    icon: 'laptop',
    key: '/index/user',
    children: [
      {
        key: '/index/user/list',
        title: '用户列表',
        icon: '',
      },
      {
        key: '/index/user/add',
        title: '添加用户',
        icon: '',
        // children: [
        //   {
        //     key: '/index/user/add/1',
        //     title: '部门列表',
        //     icon: '',
        //   },
        //   {
        //     key: '/index/user/add/2',
        //     title: '添加部门',
        //     icon: '',
        //     children: [
        //       {
        //         key: '/index/user/add/2/1',
        //         title: '部门列表',
        //         icon: '',
        //       },
        //       {
        //         key: '/index/user/add/2/2',
        //         title: '添加部门',
        //         icon: '',
        //       },
        //     ],
        //   },
        // ],
      },
    ],
  },
  {
    title: '部门管理',
    icon: 'bars',
    key: '/home/navigation',
    children: [
      {
        key: '/home/navigation/dropdown',
        title: '部门列表',
        icon: '',
      },
      {
        key: '/home/navigation/menu',
        title: '添加部门',
        icon: '',
      },
    ],
  },
  {
    title: '职位管理',
    icon: 'edit',
    key: '/home/entry',
    children: [
      {
        key: '/home/entry/form/basic-form',
        title: '职位列表',
        icon: '',
      },
      {
        key: '/home/entry/form/step-form',
        title: '职位列表',
        icon: '',
      },
    ],
  },
  {
    title: '请假',
    icon: 'info-circle-o',
    key: '/home/about',
  },
  {
    title: '加班',
    icon: 'info-circle-o',
    key: '/home/abouta',
  },
]
export default router
