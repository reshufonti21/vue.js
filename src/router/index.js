import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../layout/login')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../layout/signup')
    },
    {
      path: '/dashboard',
      name: 'dahsboard',
      component: () => import('../layout/dashboard')
    }
    // {
    //   path: '/Login',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/Dashboard',
    //   name: 'Dashboard',
    //   component: Dashboard
    // }
  ]
})
