import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './http/api';
import Router from 'vue-router'
import

Vue.use(Vant);
Vue.prototype.$api = api
Vue.config.productionTip = false

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
