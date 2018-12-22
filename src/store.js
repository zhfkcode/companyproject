import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    ISLOADING: (state, data)=>{
      console.log(state,data)
      state.loading = data
    }
  },
  actions: {
    isLoading: ({commit}, data) => {
      commit('ISLOADING', data)
    }
  }
})
