// side侧边导航栏
export default [
    // 资源管理
    {
      title: "资源管理",
      name: "1",
      icon: "ios-navigate",
      MenuItem: [{
          title: '课程管理',
          name: "courseManagement",
          icon: "ios-navigate",
        },
        {
          title: '课程上传',
          name: "courseUploading",
          icon: "ios-navigate",
        }
      ]
    },
    // 培训计划
    {
        title: "培训计划",
        name: "2",
        icon: "ios-navigate",
        MenuItem: [{
            title: '培训专题',
            name: "2-1",
            icon: "ios-navigate",
          }
        ]
      },
    // 学习管理
      {
        title: "学习管理",
        name: "3",
        icon: "ios-navigate",
        MenuItem: [{
            title: '学习重置',
            name: "3-1",
            icon: "ios-navigate",
          }
        ]
      },
      // 系统管理
      {
        title: "系统管理",
        name: "4",
        icon: "ios-navigate",
        MenuItem: [{
            title: '用户管理',
            name: "4-1",
            icon: "ios-navigate",
          },
          {
            title: '角色管理',
            name: "4-2",
            icon: "ios-navigate",
          }
        ]
      }
  ]
  