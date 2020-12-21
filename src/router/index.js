import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('@/views/Icon.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
