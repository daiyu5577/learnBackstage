import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入组件
const _import = file => require(`@/views/${file}`).default

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: _import('layout/layout')
    }
  ]
})
