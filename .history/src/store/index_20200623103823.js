import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    citya:'',
    citya:'',
    name:'',
    tel:'',
    county:'',
    city:'',
    areaCode:'',
    addressDetail:'',
    address:'',
  },
  mutations: {
    setCity(state,data){
      state.citya = data
    },
    steArea(state,data){
      state.areas = data
    }
  },
  actions: {
  },
  modules: {
  }
})
