import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入组件
const _import = file => require(`@/views/${file}`).default

export default new Router({
  routes: [
    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: _import('login/login')
    },
    // 初始页面
    {
      path: '/',
      redirect: '/layout/courseManagement',
      name: '主页'
    },
    // 主入口
    {
      path: '/layout',
      name: 'layout',
      component: _import('layout/layout'),
      children: [
        // 资源管理--课程管理
        {
          path: 'courseManagement',
          name: 'courseManagement',
          component: _import('resource-management/course-management'),
          meta: {
            path: ['资源管理', '课程管理']
          }
        },
        // 资源管理--课程上传
        {
          path: 'courseUploading',
          name: 'courseUploading',
          component: _import('resource-management/course-uploading'),
          meta: {
            path: ['资源管理', '课程上传']
          }
        }
      ]
    }
  ]
})
