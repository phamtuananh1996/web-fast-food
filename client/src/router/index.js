import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Cart from '@/components/cart'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/admin',
    name: 'admin',
    component: Cart,
    meta: { requiresAuth: true },
    children: [{
      path: 'cart',
      component: Cart
    }]
  }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  mode: 'history'
})
