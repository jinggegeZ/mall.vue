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
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
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
  // 编辑地址
  {
    path: '/editAddress',
    name: 'editAddress',
    component: () => import('../views/editAddress/editAddress.vue')
  },
  // 新鲜水果
  {
    path: '/Fruits',
    name: 'Fruits',
    component: () => import('../views/Fruits/Fruits.vue')
  },
  // 我的
  {
    path: '/personalCare',
    name: 'personalCare',
    component: () => import('../views/personalCare/personalCare.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
