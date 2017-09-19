import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user:{}
}

const mutations = {
  isLogin (state,user) {
    console.log(user+"已存储")
    state.user = user
  }
}


export default new Vuex.Store({
  state,
  mutations
})
