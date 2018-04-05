import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/containers/login/index'

// Containers
import Full from '@/containers/Full'
import User from '@/containers/user/index'

// Views
import Dashboard from '@/views/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'user',
          name: 'User',
          component: User
        }

      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
