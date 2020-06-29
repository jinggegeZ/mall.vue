// 模块化 
// export default 只能到出一次
// export 可以导出多次
import Vue from 'vue'
import { Dialog } from 'vant'
export default {
  checkLogin(next) {
    Vue.prototype.$checkLogin = (next) => {
      if (!localStorage.user) {
        Dialog.confirm({
          title: '系统检测到您现在没有登陆',
          message: '是否立即前往登录/注册页面',
        })
        return false
      } else {
        next()
      }
    }
  },
  addViews(item) {
    // 判断本地有没有最近浏览的数组
    if (!localStorage.views) {
      let arr = []
      arr.push(item)
      localStorage.setItem('views', JSON.stringify(arr))
    } else {
      let arr = JSON.parse(localStorage.views)
      arr.push(item)
      localStorage.setItem('views', JSON.stringify(arr))
    }
  }
}

// export function checkLogin() {

// }

// export function addViews() {}