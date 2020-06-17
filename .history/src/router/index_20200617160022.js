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
    component: () => import('../views/About.vue')
  },
  // 详情页
  {
    path: '/details',
    name: 'detail',
    component: () => import('../views/details/details')
  },
  // 地址列表
  {
    path: '/addressList',
    name: 'addressList',
    component: () => import('../views/addressList/addressList')
  },
  // 饮料
  {
    path: '/Drinks',
    name: 'Drinks',
    component: () => import('../views/Drinks/Drinks')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
