import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Configuration from '@/components/Configuration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      alias: '/hello'
    },
    {
      path: '/config',
      name: 'config',
      component: Configuration
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
