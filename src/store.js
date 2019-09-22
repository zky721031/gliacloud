import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    volume: 1
  },
  mutations: {
    updateVolume (state, payload) {
      state.volume = payload
    }
  },
  actions: {
    updateVolume ({ commit }, volume) {
      commit('updateVolume', volume)
    }
  }
})
