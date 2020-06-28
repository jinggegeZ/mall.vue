import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout1/layout.vue'

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
        {
          path: '',
          name: 'Home',
          component: Home,
          meta:{
          title:'商城'
          }
        },
        {
          path: 'classification',
          name: 'classification',
          component: () => import('../views/classification/classification.vue'),
          meta:{
          title:'分类'
          }
        },
        {
          path: 'carts',
          name: 'carts',
          component: () => import('../views/carts/carts.vue'),
          meta:{
          title:'购物车'
          }
        },
        {
          path: 'my',
          name: 'my',
          component: () => import('../views/my/my.vue'),
          meta:{
          title:'我的'
          }
        },
      ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta:{
      title:'登录页'
    }
  },
  // 详情页
  {
    path: '/details',
    name: 'detail',
    component: () => import('../views/details/details'),
    meta:{
      title:"详情页"
    }
  },
  // 地址列表
  {
    path: '/addressList',
    name: 'addressList',
    component: () => import('../views/addressList/addressList'),
    meta:{
      title:"地址列表"
    }
  },
  // 饮料
  {
    path: '/Drinks',
    name: 'Drinks',
    component: () => import('../views/Drinks/Drinks'),
    meta:{
      title:'饮料'
    }
  },
  // 编辑地址
  {
    path: '/editAddress',
    name: 'editAddress',
    component: () => import('../views/editAddress/editAddress.vue'),
    meta:{
      title:'地址编辑'
    }
  },
  {
    path: '/editaddresss',
    name: 'editaddresss',
    component: () => import('../views/editaddresss/editaddresss.vue'),
    meta:{
      title:'地址编辑'
    }
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
  // 最近浏览
  {
    path: '/recentBrowsing',
    name: 'recentBrowsing',
    component: () => import('../views/recentBrowsing/recentBrowsing.vue')
  },
  // 酒品
  {
    path: '/wine',
    name: 'wine',
    component: () => import('../views/wine/wine.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/register.vue')
  },
  {
    path: '/uploader',
    name: 'uploader',
    component: () => import('../views/uploader/uploader')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../views/city/city')
  },
  {
    path: '/oldEva',
    name: 'oldEva',
    component: () => import('../views/evaluate/oldEva.vue'),
    meta:{
      title:'已评论'
    }
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    component: () => import('../views/evaluate/evaluate'),
    meta:{
      title:'评论'
    }
  },
  {
    path: '/writeEva',
    name: 'writeEva',
    component: () => import('../views/evaluate/writeEva'),
    meta:{
      title:'写评论'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/order.vue'),
    meta:{
      title:'全部订单'
    }
  },
  {
    path: '/recently',
    name: 'recently',
    component: () => import('../views/recently/recently'),
    meta:{
      title:'最近浏览'
    }
  },
  {
    path: '/collect',
    name: 'mcollect',
    component: () => import('../views/myCollection/collect'),
    meta:{
      title:'收藏'
    }
  },
  {
    path: '/collect',
    name: 'mcollect',
    component: () => import('../views/myCollection/collect'),
    meta:{
      title:'收藏'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
