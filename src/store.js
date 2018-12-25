import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    ISLOADING: (state, data)=>{
      state.isLoading = data
    }
  },
  actions: {
    isLoading: ({commit}, data) => {
      commit('ISLOADING', data)
    }
  }
})
